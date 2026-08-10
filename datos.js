if (!window.DATOS_CRM) {
const CARTERAS = [
  { id:'todas', nombre:'Todas las carteras', color:'#605d5d' },
  { id:'aires', nombre:'Aires de San Lorenzo', color:'#2C4A6E' },
  { id:'propia', nombre:'Cartera propia', color:'#6b7f3a' },
  { id:'alquileres', nombre:'Alquileres', color:'#8a6410' },
  { id:'torre', nombre:'Edificio Torre', color:'#6d4a7c' },
  { id:'loteos', nombre:'Loteos', color:'#3d6b4f' },
];

const EST = {
  activa:     { nombre:'Activa',    fg:'#3d6b4f', bg:'#e6efe8' },
  reservada:  { nombre:'Reservada', fg:'#8a6410', bg:'#f7efdb' },
  alquilada:  { nombre:'Alquilada', fg:'#2C4A6E', bg:'#eef2f7' },
  vendida:    { nombre:'Vendida',   fg:'#605d5d', bg:'#eae7e7' },
};

// codigo, direccion, barrio, tipo, operacion, moneda, precio, dorm, banos, m2, ficha, cartera, estado, agente
const CRUDO = [
  ['MOL-225748','Luis Burela y Luis','Centro','Galpón','Alquiler','ARS',3000000,0,2,450,76,'alquileres','alquilada','FM'],
  ['MOL-224226','Córdoba 269','Centro','Local comercial','Venta','USD',680000,0,3,150,76,'propia','activa','FM'],
  ['MOL-224219','Pueyrredon 1469','Centro','Departamento','Venta','USD',65000,1,1,40,76,'propia','activa','FM'],
  ['MOL-224081','Del Milagro 694','Centro','Casa','Venta','USD',220000,8,2,265,76,'propia','activa','FM'],
  ['MOL-224074','Avenida Yirigoyen 63','El Portezuelo','Casa','Alquiler','ARS',2500000,5,2,230,76,'alquileres','alquilada','FM'],
  ['MOL-224063','Cerrillos','Salta','Finca','Venta','USD',700000,0,0,0,38,'propia','activa','FM'],
  ['MOL-222982','avenida Sarmiento 769','Centro','Departamento','Venta','USD',93500,2,2,75,76,'propia','activa','FM'],
  ['MOL-222622','25 de Mayo 630','Centro','Departamento','Alquiler','ARS',600000,1,1,60,76,'alquileres','alquilada','FM'],
  ['MOL-222619','Gorriti 4','Centro','Departamento','Alquiler','ARS',700000,2,1,90,76,'alquileres','alquilada','FM'],
  ['MOL-221953','Pedernera 223','Centro','Departamento','Venta','USD',89000,1,1,65,76,'propia','activa','FM'],
  ['MOL-221842','Teniente Coronel Santiago Morales 702','Centro','Departamento','Venta','USD',75000,1,1,55,76,'propia','activa','FM'],
  ['MOL-220991','San Luis','Salta','Terreno','Venta','USD',45000,0,0,0,53,'propia','activa','FM'],
  ['MOL-220984','Coronel vidt y corrie','Centro','Terreno','Venta','USD',95000,0,0,0,60,'propia','activa','FM'],
  ['MOL-220887','General Guemes 1768','Centro','Departamento','Venta','USD',100000,1,1,52,76,'propia','activa','FM'],
  ['MOL-220883','Avenida Independencia 56','San Antonio','Casa','Venta','USD',110000,2,2,90,76,'propia','activa','FM'],
  ['MOL-220876','Avenida Belgrano 2380','Centro','Casa','Venta','USD',150000,5,3,145,76,'propia','activa','FM'],
  ['MOL-219927','Calle sin nombre','Otros Barrios','Casa','Venta','USD',155000,3,3,130,68,'propia','activa','FM'],
  ['MOL-218328','General Paz 18','Centro','Departamento','Venta','USD',120000,3,2,86,76,'propia','activa','FM'],
  ['MOL-218326','Alvarez Jonte 864','Sa','Dúplex','Venta','USD',100000,2,2,94,76,'propia','activa','FM'],
  ['MOL-215246','Dean Funes 343','Centro','Oficina','Alquiler','USD',600,0,1,60,68,'alquileres','alquilada','FM'],
  ['MOL-215236','El Encon','Rosario de Lerma','Terreno','Venta','USD',75000,0,0,0,53,'propia','activa','FM'],
  ['MOL-215232','El Encon','Rosario de Lerma','Finca','Alquiler','USD',2500,0,0,0,53,'alquileres','activa','FM'],
  ['MOL-214601','El Encón','El Encon','Casa','Venta','USD',340000,0,0,0,45,'propia','activa','FM'],
  ['MOL-214075','Juramento 1569','Centro','Departamento','Venta','USD',85000,1,1,42,76,'propia','activa','FM'],
  ['MOL-214073','Dean Funes y Belgrano','Centro','Local comercial','Venta','USD',115000,0,1,75,76,'propia','activa','FM'],
  ['MOL-213883','Santiago del Estero 789','Centro','Departamento','Venta','USD',75000,1,1,35,76,'propia','activa','FM'],
  ['MOL-213879','Maipu 517','Centro','Departamento','Venta','USD',88000,1,2,59,76,'propia','activa','FM'],
  ['MOL-213170','Belisario Roldan & Costanera','San Lorenzo','Terreno','Venta','USD',290000,0,0,0,53,'propia','activa','FM'],
  ['MOL-213136','Chicoana','Salta','Terreno','Venta','ARS',13400000,0,0,0,53,'propia','activa','FM'],
  ['MOL-209940','Leopoldo Lugones 250','Villa San Lorenz','Casa','Venta','USD',550000,5,4,494,76,'propia','activa','FM'],
  ['MOL-208531','Aniceto Latorre 1658','Centro','Casa','Venta','USD',100000,6,2,480,68,'propia','activa','FM'],
  ['MOL-208481','Córdoba 777','salt','Casa','Venta','USD',95000,3,2,184,68,'propia','activa','FM'],
  ['MOL-204339','Ricardo Ibazeta & Pablo A','Centro','Terreno','Venta','USD',42000,0,0,0,60,'propia','activa','FM'],
  ['MOL-204329','VAQUEROS','La Caldera','Casa','Venta','USD',225000,4,3,202,76,'propia','activa','FM'],
  ['MOL-200065','Club de campo El Enc','El Encon','Terreno','Venta','USD',35000,0,0,0,60,'propia','activa','FM'],
  // Unidades de Aires de San Lorenzo — el emprendimiento no se publica en su web
  ['AIR-D02','Dúplex 02 · Aires de San Lorenzo','San Lorenzo','Dúplex','Venta','USD',71500,3,2,92,71,'aires','activa','LL'],
  ['AIR-D03','Dúplex 03 · Aires de San Lorenzo','San Lorenzo','Dúplex','Venta','USD',71500,3,2,92,71,'aires','activa','LL'],
  ['AIR-D05','Dúplex 05 · Aires de San Lorenzo','San Lorenzo','Dúplex','Venta','USD',73900,3,2,92,71,'aires','reservada','LL'],
  ['AIR-D09','Dúplex 09 · Aires de San Lorenzo','San Lorenzo','Dúplex','Venta','USD',58900,2,1,68,67,'aires','activa','FM'],
  ['AIR-D12','Dúplex 12 · Aires de San Lorenzo','San Lorenzo','Dúplex','Venta','USD',76400,3,2,98,71,'aires','activa','LL'],
  ['AIR-L04','Lote 04 · Aires de San Lorenzo','San Lorenzo','Terreno','Venta','USD',48000,0,0,300,60,'aires','activa','FM'],
  ['AIR-L07','Lote 07 · Aires de San Lorenzo','San Lorenzo','Terreno','Venta','USD',52500,0,0,340,60,'aires','activa','LL'],
  ['AIR-L11','Lote 11 · Aires de San Lorenzo','San Lorenzo','Terreno','Venta','USD',48000,0,0,300,60,'aires','reservada','FM'],
];

const FALTANTES = ['partida catastral','estado del título','informe de dominio','libre deuda de impuestos','libre deuda de expensas','plano aprobado','ubicación de las llaves','autorización de venta firmada','fotos en alta','matrícula del propietario'];
const PORTALES = ['web','ig','zp','ml'];

function hash(s){ let h = 0; for (let i=0;i<s.length;i++) h = (h*31 + s.charCodeAt(i)) & 0x7fffffff; return h; }

function pl(n, sing, plur){ return n + ' ' + (n === 1 ? sing : (plur || sing + 's')); }

const FALTA_FIJA = {
  'MOL-224226': ['partida catastral','estado del título','informe de dominio'],
  'MOL-224063': ['estado del título','informe de dominio','libre deuda de impuestos','plano aprobado','ubicación de las llaves','autorización de venta firmada'],
  'LOT-0117': ['partida catastral','estado del título','informe de dominio','plano aprobado','autorización de venta firmada','fotos en alta','matrícula del propietario'],
  'MOL-204329': ['informe de dominio','libre deuda de impuestos','plano aprobado','ubicación de las llaves','autorización de venta firmada'],
  'MOL-220887': ['partida catastral','libre deuda de expensas','plano aprobado','ubicación de las llaves','autorización de venta firmada'],
  'MOL-213136': ['informe de dominio','plano aprobado','fotos en alta'],
  'MOL-224081': ['libre deuda de impuestos','ubicación de las llaves','fotos en alta'],
  'MOL-224081': ['estado del título','autorización de venta firmada','fotos en alta'],
  'TOR-0201': ['partida catastral','plano aprobado','fotos en alta'],
  'MOL-218326': ['autorización de venta firmada','fotos en alta'],
  'MOL-222622': ['libre deuda de expensas','ubicación de las llaves'],
  'MOL-222619': ['informe de dominio','fotos en alta'],
  'MOL-214075': ['libre deuda de expensas','matrícula del propietario'],
  'MOL-220887': ['plano aprobado','fotos en alta'],
  'AIR-L04': ['informe de dominio','plano aprobado'],
  'MOL-222619': ['ubicación de las llaves'],
};

const PROPS = CRUDO.map(function(r){
  const h = hash(r[0]);
  const falta = Math.max(0, Math.round((100 - r[10]) / 9));
  const lista = (FALTA_FIJA[r[0]] || []).slice();
  const inicio = h % FALTANTES.length, paso = 3 + (h % 7);
  for (let i=0; lista.length < falta && i < FALTANTES.length; i++) {
    const cand = FALTANTES[(inicio + i*paso) % FALTANTES.length];
    if (lista.indexOf(cand) < 0) lista.push(cand);
  }
  const port = PORTALES.filter(function(p,i){ return r[10] > 70 ? ((h >> i) & 1) === 1 || i === 0 : i === 0; });
  return {
    codigo:r[0], direccion:r[1], barrio:r[2], tipo:r[3], operacion:r[4], moneda:r[5], precio:r[6],
    dorm:r[7], banos:r[8], m2:r[9], ficha:r[10], cartera:r[11], estado:r[12], agente:r[13],
    falta: Array.from(new Set(lista)),
    consultas: r[12] === 'vendida' ? 0 : (h % 9),
    diasSin: (h % 14),
    portales: port,
    foto: r[0].indexOf('MOL-')===0 ? 'fotos/thumbs/'+r[0]+'-1.jpg' : '',
    fotoGrande: r[0].indexOf('MOL-')===0 ? 'fotos/'+r[0]+'-1.jpg' : '',
    publicada: ['hace 3 días','hace 1 semana','hace 2 semanas','hace 1 mes','hace 2 meses','hace 4 meses'][h % 6],
    lat: 30 + ((h % 61)), lng: 24 + ((h >> 5) % 63),
  };
});

const CONSULTAS = [
  { id:1, nombre:'Mariela Sarapura', tel:'387 415 2280', canal:'Campaña Meta', origen:'Aires · Financiación 84 cuotas', interes:'Dúplex 03', hs:0.2, hace:'hace 12 min', agente:'LL', estado:'Nueva', temp:'Caliente', cartera:'aires', puntaje:88, motivo:'Pidió el plan de cuotas y volvió tres veces a la misma unidad.' },
  { id:2, nombre:'Gonzalo Figueroa', tel:'387 503 7741', canal:'Formulario web', origen:'airesdesanlorenzo.com/unidades', interes:'Lote 07', hs:0.8, hace:'hace 48 min', agente:'FM', estado:'Nueva', temp:'Caliente', cartera:'aires', puntaje:81, motivo:'Dejó teléfono y horario de contacto. Consulta específica de superficie.' },
  { id:3, nombre:'Rocío Villagrán', tel:'387 421 9034', canal:'Instagram', origen:'@molins.propiedades · orgánico', interes:'Córdoba 269', hs:2, hace:'hace 2 h', agente:'FM', estado:'Contactada', temp:'Tibio', cartera:'propia', puntaje:64, motivo:'Interés en local comercial, no dijo presupuesto.' },
  { id:4, nombre:'Emiliano Cardozo', tel:'387 564 1188', canal:'WhatsApp', origen:'Anuncio Click-to-WhatsApp', interes:'Aires · sin unidad', hs:3, hace:'hace 3 h', agente:'LL', estado:'Nueva', temp:'Caliente', cartera:'aires', puntaje:92, motivo:'Pregunta por anticipo y escritura. Perfil de primera vivienda.' },
  { id:5, nombre:'Sofía Guaymás', tel:'387 435 6620', canal:'Campaña Meta', origen:'Aires · Lanzamiento', interes:'Dúplex 09', hs:26, hace:'hace 26 h', agente:'LL', estado:'Sin responder', temp:'Caliente', cartera:'aires', puntaje:79, motivo:'Consulta completa con presupuesto. Nadie la contestó.' },
  { id:6, nombre:'Nicolás Zerpa', tel:'387 512 3307', canal:'Zonaprop', origen:'Aviso destacado', interes:'Del Milagro 694', hs:20, hace:'hace 20 h', agente:'FM', estado:'Contactada', temp:'Tibio', cartera:'propia', puntaje:58, motivo:'Pidió más fotos, no respondió al segundo mensaje.' },
  { id:7, nombre:'Andrea Chocobar', tel:'387 447 8812', canal:'Formulario web', origen:'molinsnegociosinmobiliarios.com/alquileres', interes:'Gorriti 4', hs:72, hace:'hace 3 días', agente:'FM', estado:'Sin responder', temp:'Tibio', cartera:'alquileres', puntaje:41, motivo:'Alquiler con garantía propietaria. Tres días sin respuesta.' },
  { id:8, nombre:'Matías Burgos', tel:'387 590 2245', canal:'Campaña Meta', origen:'Aires · Lanzamiento', interes:'Lote 11', hs:5, hace:'hace 5 h', agente:'FM', estado:'Agendada', temp:'Caliente', cartera:'aires', puntaje:85, motivo:'Visita agendada para el sábado. Pidió el cuadro de precios.' },
  { id:9, nombre:'Valeria Nieva', tel:'387 418 7736', canal:'Instagram', origen:'Historia destacada · Unidades', interes:'Pueyrredón 1469', hs:8, hace:'hace 8 h', agente:'FM', estado:'Contactada', temp:'Tibio', cartera:'propia', puntaje:55, motivo:'Consulta de precio solamente.' },
  { id:10, nombre:'Cristian Colque', tel:'387 533 1490', canal:'Mercado Libre', origen:'Publicación clásica', interes:'Avenida Sarmiento 769', hs:31, hace:'hace 31 h', agente:'FM', estado:'Sin responder', temp:'Frío', cartera:'propia', puntaje:34, motivo:'Mensaje genérico del portal, sin datos de contacto propios.' },
  { id:11, nombre:'Julieta Aramayo', tel:'387 462 5518', canal:'WhatsApp', origen:'Bio de Instagram', interes:'Dúplex 02', hs:0.7, hace:'hace 40 min', agente:'LL', estado:'Nueva', temp:'Caliente', cartera:'aires', puntaje:90, motivo:'Consultó financiación a 7 años y disponibilidad para visitar.' },
  { id:12, nombre:'Federico Vilte', tel:'387 577 0923', canal:'Campaña Meta', origen:'Aires · Financiación 84 cuotas', interes:'Aires · sin unidad', hs:1, hace:'hace 1 h', agente:'FM', estado:'Nueva', temp:'Tibio', cartera:'aires', puntaje:68, motivo:'Clic en el anuncio, no completó el formulario.' },
  { id:13, nombre:'Carolina Toledo', tel:'387 429 3316', canal:'Formulario web', origen:'molinsnegociosinmobiliarios.com/comercial', interes:'Luis Burela y Luis', hs:6, hace:'hace 6 h', agente:'FM', estado:'Contactada', temp:'Tibio', cartera:'alquileres', puntaje:60, motivo:'Busca galpón para depósito. Pidió ver el martes.' },
  { id:14, nombre:'Leandro Saravia', tel:'387 548 6602', canal:'Instagram', origen:'@molins.propiedades · orgánico', interes:'Belgrano 455, Piso 7 “A”', hs:48, hace:'hace 2 días', agente:'FM', estado:'Sin responder', temp:'Tibio', cartera:'torre', puntaje:47, motivo:'Dos días sin respuesta. Preguntó por expensas.' },
  { id:15, nombre:'Paula Mamaní', tel:'387 414 2078', canal:'Campaña Meta', origen:'Aires · Lanzamiento', interes:'Lote 04', hs:20, hace:'hace 20 h', agente:'LL', estado:'Contactada', temp:'Caliente', cartera:'aires', puntaje:83, motivo:'Quiere construir. Consultó plazos de escrituración.' },
  { id:16, nombre:'Diego Arroyo', tel:'387 596 4431', canal:'WhatsApp', origen:'Contacto directo al celular', interes:'Manzana 4 · Lote 17', hs:96, hace:'hace 4 días', agente:'FM', estado:'Sin responder', temp:'Frío', cartera:'loteos', puntaje:29, motivo:'Cuatro días sin respuesta. Consulta suelta, sin seguimiento.' },
  { id:17, nombre:'Antonella Ruiz', tel:'387 431 8859', canal:'Formulario web', origen:'molinsnegociosinmobiliarios.com/alquileres', interes:'25 de Mayo 630', hs:15, hace:'hace 15 h', agente:'FM', estado:'Agendada', temp:'Caliente', cartera:'alquileres', puntaje:72, motivo:'Visita el viernes 10:30. Tiene garantía y recibo de sueldo.' },
  { id:18, nombre:'Sebastián Guzmán', tel:'387 555 7014', canal:'WhatsApp', origen:'Anuncio Click-to-WhatsApp', interes:'Dúplex 12', hs:22, hace:'hace 22 h', agente:'LL', estado:'Contactada', temp:'Tibio', cartera:'aires', puntaje:66, motivo:'Respondió el bot, todavía no habló con una persona.' },
];

const CANALES_MES = [
  ['Campañas Meta', { aires:76, propia:11, alquileres:0, torre:0, loteos:0 }, '#2C4A6E'],
  ['WhatsApp', { aires:19, propia:6, alquileres:0, torre:1, loteos:1 }, '#46689a'],
  ['Instagram', { aires:9, propia:12, alquileres:0, torre:1, loteos:0 }, '#6d4a7c'],
  ['Formulario web', { aires:7, propia:4, alquileres:5, torre:0, loteos:2 }, '#3d6b4f'],
  ['Mercado Libre', { aires:0, propia:5, alquileres:1, torre:1, loteos:0 }, '#8a6410'],
  ['Zonaprop', { aires:0, propia:4, alquileres:0, torre:2, loteos:0 }, '#8a8886'],
];

const AGENDA = [
  { hora:'09:00', titulo:'Visita · Del Milagro 694', detalle:'Nicolás Zerpa · 387 512 3307', cartera:'propia', color:'#6b7f3a' },
  { hora:'10:30', titulo:'Llamado · Sofía Guaymás', detalle:'Consulta de Aires sin responder hace 26 h', cartera:'aires', color:'#ae1800' },
  { hora:'12:00', titulo:'Visita · Dúplex 03 y Lote 07', detalle:'Mariela Sarapura · atiende Luis', cartera:'aires', color:'#2C4A6E' },
  { hora:'16:00', titulo:'Vence la autorización · Balcarce 1015', detalle:'Firmada el 06/02 · renovar con el propietario', cartera:'propia', color:'#ae1800' },
  { hora:'17:30', titulo:'Entrega de llaves · Ituzaingó 745', detalle:'Inquilino nuevo · contrato firmado', cartera:'alquileres', color:'#8a6410' },
  { hora:'18:30', titulo:'Reunión con CIC', detalle:'Avance de obra y cuadro de precios de Aires', cartera:'aires', color:'#2C4A6E' },
];

const MENU_DEF = [
  { id:'inicio', etiqueta:'Inicio', paths:['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z','M9 22V12h6v10'] },
  { id:'aires', etiqueta:'Aires de San Lorenzo', soloAires:true, paths:['M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z','M10 6h4','M10 10h4','M10 14h4','M10 18h4'] },
  { id:'consultas', etiqueta:'Consultas', paths:['M22 12h-6l-2 3h-4l-2-3H2','M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z'] },
  { id:'propiedades', etiqueta:'Propiedades', admin:true, paths:['M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z','M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2','M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2','M10 6h4','M10 10h4','M10 14h4'] },
  { id:'mapa', etiqueta:'Mapa', admin:true, paths:['M14.1 5.55a2 2 0 0 0 1.79 0l3.66-1.83A1 1 0 0 1 21 4.62v12.76a1 1 0 0 1-.55.9l-4.56 2.27a2 2 0 0 1-1.78 0l-4.22-2.1a2 2 0 0 0-1.78 0l-3.66 1.83A1 1 0 0 1 3 19.38V6.62a1 1 0 0 1 .55-.9l4.56-2.27a2 2 0 0 1 1.78 0z','M15 5.76v15','M9 3.24v15'] },
  { id:'clientes', etiqueta:'Clientes', paths:['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2','M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0','M22 21v-2a4 4 0 0 0-3-3.87','M16 3.13a4 4 0 0 1 0 7.75'] },
  { id:'campanas', etiqueta:'Campañas', admin:true, paths:['m3 11 18-5v12L3 14v-3z','M11.6 16.8a3 3 0 1 1-5.8-1.6'] },
  { id:'portal', etiqueta:'Mi portal web', admin:true, paths:['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20','M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20','M2 12h20'] },
  { id:'calendario', etiqueta:'Calendario', paths:['M3 5h18v17H3z','M16 2v5','M8 2v5','M3 10h18'] },
  { id:'usuarios', etiqueta:'Usuarios', admin:true, paths:['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z','m9 12 2 2 4-4'] },
];

const TARJETAS_DEF = [
  { id:'indices', titulo:'Índices del día', pie:'Fuente BNA · CAC · INDEC', span:12 },
  { id:'canal', titulo:'Consultas del mes por canal', pie:'Agosto', span:5 },
  { id:'sinresponder', titulo:'Consultas sin responder', pie:'Ordenadas por demora', span:7 },
  { id:'agenda', titulo:'Agenda de hoy', pie:'Jueves 6', span:5 },
  { id:'cartera', titulo:'Estado de la cartera', pie:'', span:7 },
];


// ---- Geografía real de Salta capital (centro de cada barrio + dispersión determinística)
const BARRIOS_GEO = {
  'Centro': [-24.7889, -65.4103],
  'Tres Cerritos': [-24.7694, -65.3952],
  'Grand Bourg': [-24.7566, -65.4486],
  'Ciudad del Milagro': [-24.7527, -65.4062],
  'El Portezuelo': [-24.7998, -65.3838],
  'Castañares': [-24.7495, -65.4214],
  'San Lorenzo': [-24.7338, -65.4859],
  'Vaqueros': [-24.6927, -65.4106],
  'Cerrillos': [-24.8996, -65.4867],
  'La Ciénaga': [-24.6789, -65.4292],
};
PROPS.forEach(function(p){
  const b = BARRIOS_GEO[p.barrio] || BARRIOS_GEO['Centro'];
  const h = hash(p.codigo);
  const esp = p.barrio === 'Centro' ? 0.011 : 0.008;
  p.geo = { lat: b[0] + (((h % 200) - 100) / 100) * esp, lng: b[1] + ((((h >> 7) % 200) - 100) / 100) * esp };
});

// nombre, tel, busca, presupuesto texto, presupuesto USD (0 = alquila en ARS), vistas, último contacto texto, días, agente, cartera, temperatura
const CLIENTES = [
  ['Mariela Sarapura','387 415 2280','Dúplex de 3 ambientes con financiación','USD 75.000',75000,3,'hace 2 días',2,'LL','aires','Caliente'],
  ['Gonzalo Figueroa','387 503 7741','Lote para construir en San Lorenzo','USD 55.000',55000,2,'hace 4 horas',0,'FM','aires','Caliente'],
  ['Rocío Villagrán','387 421 9034','Local comercial sobre calle céntrica','USD 700.000',700000,1,'hace 2 horas',0,'FM','propia','Tibio'],
  ['Emiliano Cardozo','387 564 1188','Primera vivienda, entrada baja','USD 60.000',60000,4,'hace 3 horas',0,'LL','aires','Caliente'],
  ['Sofía Guaymás','387 435 6620','Dúplex de 2 ambientes','USD 60.000',60000,1,'hace 26 días',26,'LL','aires','Caliente'],
  ['Nicolás Zerpa','387 512 3307','Casa grande en el centro','USD 250.000',250000,5,'hace 21 días',21,'FM','propia','Tibio'],
  ['Andrea Chocobar','387 447 8812','Departamento en alquiler, 2 dormitorios','ARS 700.000',0,2,'hace 47 días',47,'FM','alquileres','Tibio'],
  ['Matías Burgos','387 590 2245','Lote de 300 m² con escritura','USD 50.000',50000,3,'hace 5 horas',0,'FM','aires','Caliente'],
  ['Valeria Nieva','387 418 7736','Monoambiente para inversión','USD 70.000',70000,6,'hace 9 días',9,'FM','propia','Tibio'],
  ['Cristian Colque','387 533 1490','Departamento 2 dormitorios','USD 95.000',95000,1,'hace 34 días',34,'FM','propia','Frío'],
  ['Leandro Saravia','387 548 6602','Departamento a estrenar en Torre','USD 180.000',180000,2,'hace 52 días',52,'FM','torre','Tibio'],
  ['Diego Arroyo','387 596 4431','Lote económico en cuotas','USD 35.000',35000,1,'hace 68 días',68,'FM','loteos','Frío'],
  ['Carolina Toledo','387 429 3316','Galpón para depósito, 400 m²','ARS 3.000.000',0,2,'hace 6 horas',0,'FM','alquileres','Tibio'],
  ['Antonella Ruiz','387 431 8859','Monoambiente en alquiler','ARS 600.000',0,3,'hace 15 horas',0,'FM','alquileres','Caliente'],
];

// nombre, plataforma, invertido USD, consultas, convertidas, cartera, color, estado
const CAMPANAS = [
  ['Aires · Financiación 84 cuotas','Meta · Instagram',310,41,5,'aires','#2C4A6E','Activa'],
  ['Aires · Lanzamiento','Meta · Instagram y Facebook',420,34,3,'aires','#2C4A6E','Activa'],
  ['Aires · Retargeting web','Meta · Facebook',145,9,1,'aires','#46689a','Activa'],
  ['Instagram orgánico','@molins.propiedades',0,22,2,'propia','#6d4a7c','Activa'],
  ['Formulario web','molinsnegociosinmobiliarios.com',0,18,2,'propia','#2e7d54','Activa'],
  ['Cartera propia · Departamentos Centro','Meta · Instagram',260,11,0,'propia','#a16207','Activa'],
  ['Mercado Libre destacados','Mercado Libre',95,7,1,'propia','#a16207','Pausada'],
  ['Zonaprop · plan plata','Zonaprop',180,6,0,'propia','#8795a5','Pausada'],
];

const PLANTILLAS = [
  { nombre:'Financiación de Aires', texto:'Hola {nombre}, soy {agente} de Molins. En Aires de San Lorenzo hay dúplex y lotes con anticipo del 30% y 84 cuotas ajustadas por CAC. ¿Te paso el cuadro de precios?' },
  { nombre:'Propiedad que coincide', texto:'Hola {nombre}, entró una propiedad que encaja con lo que buscabas ({busca}). ¿Querés que coordinemos una visita esta semana?' },
  { nombre:'Reactivación de contacto', texto:'Hola {nombre}, hace un tiempo consultaste con nosotros. Hay novedades de precio y financiación, ¿seguís buscando?' },
];

// día(0=lun), hora, título, detalle, color, cartera
const EVENTOS = [
  [0,'10:00','Visita · Caseros 1240','Valeria Nieva','#2e7d54','propia'],
  [0,'16:30','Llamado · Cristian Colque','Consulta de Mercado Libre','#2C4A6E','propia'],
  [1,'09:30','Visita · Dúplex 05','Reserva de Paula Mamaní','#2e7d54','aires'],
  [1,'18:00','Vence la reserva · Lote 06','Avisar a CIC','#b42318','aires'],
  [2,'11:00','Visita · Los Lapachos 380','Nicolás Zerpa','#2e7d54','propia'],
  [3,'09:00','Visita · Del Milagro 694','Nicolás Zerpa','#2e7d54','propia'],
  [3,'10:30','Llamado · Sofía Guaymás','Sin responder hace 26 h','#b42318','aires'],
  [3,'12:00','Visita · Dúplex 03 y Lote 07','Mariela Sarapura · atiende Luis','#2e7d54','aires'],
  [3,'16:00','Vence la autorización · Balcarce 1015','Renovar con el propietario','#b42318','propia'],
  [3,'18:30','Reunión con CIC','Avance de obra y cuadro de precios','#2C4A6E','aires'],
  [4,'10:30','Visita · 25 de Mayo 630','Antonella Ruiz','#2e7d54','alquileres'],
  [4,'15:00','Llamado · Andrea Chocobar','Tres días sin respuesta','#b42318','alquileres'],
  [5,'11:00','Visita · Lote 11','Matías Burgos','#2e7d54','aires'],
  [5,'12:30','Visita · Lote 04','Paula Mamaní','#2e7d54','aires'],
];

// Única fuente de verdad de qué se ofrece en el sitio: nada vendido ni ya alquilado.
// Las reservadas se muestran marcadas, pero no cuentan como disponibles.
function enElSitio(p){ return p.portales.indexOf('web') >= 0 && p.estado !== 'vendida' && p.estado !== 'alquilada'; }
function estaDisponible(p){ return enElSitio(p) && p.estado === 'activa'; }

window.DATOS_CRM = { enElSitio, estaDisponible, CARTERAS, EST, PROPS, CONSULTAS, CANALES_MES, AGENDA, MENU_DEF, TARJETAS_DEF, FALTANTES, CLIENTES, CAMPANAS, PLANTILLAS, EVENTOS, BARRIOS_GEO, hash, pl };

}

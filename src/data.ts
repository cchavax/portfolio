// ─────────────────────────────────────────────────────────────
// Todo el contenido del sitio está acá. Editá este archivo y listo.
// Los campos marcados con TODO son los que tenés que completar.
// ─────────────────────────────────────────────────────────────

export const perfil = {
  nombre: "TODO: Tu nombre y apellido",
  rol: "Desarrollador full stack",
  ciudad: "Córdoba, Argentina",
  // Número con código de país, sin + ni espacios. Ej: 5493511234567
  whatsapp: "549XXXXXXXXXX",
  mensajeWhatsapp: "Hola, vi tu portfolio y quiero consultarte por un sistema para mi negocio.",
  email: "TODO@tu-mail.com",
  linkedin: "https://www.linkedin.com/in/TODO",
  github: "https://github.com/TODO",
};

export const hero = {
  titulo: "Sistemas web a medida para que tu negocio deje de depender de planillas.",
  bajada:
    "Construyo sistemas de gestión, tiendas online y portales para clientes. Hoy los usan negocios reales para controlar stock, ventas y pedidos.",
};

// Avisos que aparecen en la animación del inicio.
// Son del tipo de cosas que hacen los sistemas que desarrollaste.
export type Aviso = { tipo: "alerta" | "ok" | "info"; titulo: string; detalle: string; origen: string };

export const avisos: Aviso[] = [
  { tipo: "alerta", titulo: "Stock crítico de harina 000", detalle: "Quedan 4 kg en la sucursal Centro", origen: "Gestión de panadería" },
  { tipo: "ok", titulo: "Pedido #1043 pagado", detalle: "Aprobado por MercadoPago, stock descontado", origen: "Tienda online" },
  { tipo: "info", titulo: "Cierre de caja listo", detalle: "Ventas del día conciliadas por medio de pago", origen: "Gestión de panadería" },
  { tipo: "ok", titulo: "Precios actualizados", detalle: "312 productos desde un Excel, en un paso", origen: "Tienda online" },
];

export type Proyecto = {
  id: string;
  nombre: string;
  cliente: string;
  enUso: string;
  link?: string;
  desafio: string;
  solucion: string[];
  rol: string;
  stack: string[];
  resultado: string;
  // Ruta dentro de /public, ej: "/capturas/cremua.png". Si lo dejás vacío no se muestra.
  captura?: string;
};

export const proyectos: Proyecto[] = [
  {
    id: "cremua",
    nombre: "Sistema de gestión para panaderías",
    cliente: "Panadería Cremua, Villa Carlos Paz",
    enUso: "En uso en las sucursales de Cremua",
    desafio:
      "Una panadería con varias sucursales necesitaba controlar en un solo lugar el stock, la producción, las ventas, los repartos y la caja.",
    solucion: [
      "Control de insumos y productos con alertas de stock crítico",
      "Recetas y planificación de la producción",
      "Tickets de venta con varios medios de pago",
      "Pedidos anticipados y seguimiento de entregas",
      "Movimientos, cierres de caja y reportes de ventas",
      "Cuatro roles de usuario con permisos propios",
      "Funciona en computadora y celular como app instalable",
    ],
    rol: "Desarrollador full stack dentro del equipo: frontend, backend y base de datos.",
    stack: ["Next.js 14", "NestJS", "PostgreSQL", "Prisma", "JWT", "React Query", "Zustand", "Tailwind"],
    resultado:
      "Más orden y control sobre el stock, la producción y la caja de todas las sucursales.",
    captura: "",
  },
  {
    id: "mrhappy",
    nombre: "Tienda online con panel de administración",
    cliente: "MrHappy, tienda de productos de vapeo",
    enUso: "Online en mrhappy.com.ar",
    link: "https://mrhappy.com.ar",
    desafio:
      "El negocio necesitaba vender online, cobrar con MercadoPago y administrar un catálogo grande sin perder el control del stock.",
    solucion: [
      "Catálogo con búsqueda, filtros y ordenamiento",
      "Carrito y checkout con pago por MercadoPago",
      "Área de cliente con historial de pedidos",
      "Panel con métricas de ventas y alertas de stock bajo",
      "Actualización masiva de precios y stock desde Excel o CSV",
      "Gestión de pedidos con reembolsos que devuelven el stock solos",
      "Ingreso con Google y cuatro roles con permisos",
    ],
    rol: "Desarrollador full stack, con participación principal en todo el proyecto.",
    stack: ["Next.js 13", "NestJS", "PostgreSQL", "Prisma", "MercadoPago SDK", "Auth0", "Zustand", "Tailwind"],
    resultado:
      "Stock mejor controlado y estadísticas de ventas a mano en un solo panel.",
    captura: "",
  },
];

export const servicios = [
  {
    titulo: "Sistemas de gestión",
    texto: "Stock, ventas, caja, producción o turnos en un sistema pensado para cómo trabaja tu negocio.",
  },
  {
    titulo: "Tiendas online",
    texto: "Catálogo, carrito y cobro con MercadoPago, con un panel para manejar productos y pedidos.",
  },
  {
    titulo: "Portales para clientes",
    texto: "Un espacio donde tus clientes ven el estado de sus trámites, suben documentos y reciben avisos.",
  },
];

export const pasos = [
  { titulo: "Charlamos 15 minutos", texto: "Me contás cómo trabajás hoy y qué te está costando tiempo." },
  { titulo: "Te paso una propuesta", texto: "Qué incluye, cuánto tarda y cuánto cuesta, por escrito." },
  { titulo: "Desarrollo con entregas semanales", texto: "Ves avances reales cada semana y ajustamos sobre la marcha." },
  { titulo: "Lanzamiento y soporte", texto: "Lo dejamos funcionando y quedo disponible para mantenimiento." },
];

// Pegá acá testimonios reales cuando los tengas. Si la lista está vacía, la sección no aparece.
export const testimonios: { texto: string; autor: string; cargo: string }[] = [
  // { texto: "…", autor: "Nombre", cargo: "Dueño de Panadería Cremua" },
];

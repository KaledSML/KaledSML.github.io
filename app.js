/**
 * CYBER-ZEN ENGINE V4.2 - DEBUGGED
 */

const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null };

// 1. MOTOR DE PARTÍCULAS
function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
        ctx.fillStyle = `rgba(0, 255, 204, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function createParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    for (let i = 0; i < count; i++) particles.push(new Particle());
}

function animate() {
    ctx.fillStyle = "rgba(2, 8, 8, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}

// 2. DATA DE PROYECTOS
const projectsData = {
    // Info para el botón de tu perfil (PITCH PERSONAL)
    'pitch-principal': {
        title: "PITCH_PERSONAL: KALED SML",
        videoID: "v5YESJcaK84", 
        github: "https://github.com/KaledSML",
        badges: ["ING_INFO", "CYBER_SEC", "I+D+i"],
        description: "Bienvenido a mi núcleo de datos. Soy Ingeniera Informática con distinción unánime, enfocada en crear soluciones tecnológicas con propósito humano y seguridad robusta."
    },
    // Info para Pudin
    'pudin': {
        title: "PUDIN: THE GHOST CAT RPA",
        videoID: "qB2oQJQuG6k", 
        github: "https://github.com/KaledSML/Pudin-Ghost-Cat-RPA",
        badges: ["RPA", "PYTHON", "FSM", "WIN32_API"],
        description: "<b>Agente Autónomo de Escritorio.</b> Pudin monitorea tu actividad en Windows mediante FSM. Si trabajas demasiado, ejecuta maldades programadas para obligarte a descansar."
    },
    // NUEVO PROYECTO: NIST SENTINEL
    'nist': {
        title: "NIST SENTINEL: CSF 2.0 ORCHESTRATOR",
        videoID: "MbYpAKBpVT4", 
        github: "https://github.com/KaledSML/nist-sentinel",
        badges: ["CIBERSEGURIDAD", "AUDIT_IT", "ZERO_TRUST", "AIR_GAPPED"],
        description: `
            <b>Orquestador de Cumplimiento Normativo.</b> Herramienta diseñada para simplificar auditorías bajo el marco NIST CSF 2.0. <br><br>
            Implementa una arquitectura <b>Serverless de Conocimiento Cero (Zero-Knowledge)</b>, asegurando que los datos sensibles de la auditoría nunca abandonen el entorno local del auditor (LocalStorage). <br><br>
            Incluye un sistema visual Kanban para la gestión de las 6 funciones del Core: Govern, Identify, Protect, Detect, Respond y Recover, transformando excels estáticos en flujos de trabajo dinámicos.
        `
    },
    // NUEVO PROYECTO: MISHI HEALTHTECH
    'mishi': {
        title: "MISHI: ECOSISTEMA HEALTH-TECH",
        videoID: "qPd3npeGM_A", 
        github: "https://github.com/KaledSML/Mishi-HealthTech-App",
        badges: ["AI_NLP", "PROTOCOLO_PAP", "OCTALYSIS", "IEEE_830"],
        description: `
            <b>Ingeniería de Software Aplicada al Bienestar.</b> Ecosistema inmersivo diseñado bajo estándares <b>ISO/IEC 25010</b> para mitigar el deterioro de la salud mental. <br><br>
            El sistema integra <b>Inteligencia Artificial (NLP)</b> para escucha activa y un motor de gamificación basado en químicos <b>DOSE</b> (Dopamina, Oxitocina, Serotonina, Endorfina), validado en pruebas de campo. <br><br>
            Incluye un módulo crítico de <b>Primeros Auxilios Psicológicos (PAP)</b> con técnicas de anclaje sensorial 5-4-3-2-1 para contención en episodios de crisis, operando bajo lineamientos de seguridad <b>NIST</b>.
        `
    },
    'te_acompano': {
        title: "TE ACOMPAÑO: SEGURIDAD HÍBRIDA",
        videoID: "j-x6SNg3ECg", 
        //github: "#", 
        badges: ["3ER_LUGAR_INNOVACIÓN", "BT_DIRECT", "MESH_PROTOCOLS", "RALLY_2021"],
        description: `
            <b>Propuesta de Innovación y Diseño UX.</b> Proyecto desarrollado por el equipo <b>INDUCOMINF ALERT</b>. <br><br>
            Se diseñó una solución híbrida para combatir la violencia de género en zonas sin cobertura, utilizando protocolos <b>Bluetooth y Wi-Fi Direct</b> para crear redes de seguridad local. <br><br>
            Obtuvo el <b>3er lugar en la Categoría de Innovación</b> en la sede UBO del Rally Latinoamericano de Innovación 2021. El proyecto consistió en la formulación técnica, investigación de factibilidad y maquetación de la experiencia de usuario.
        `
    },
    'spmg': {
        title: "SPMG: SISTEMA DE PREVENCIÓN DE GAS",
        videoID: "eweGFmQ_UTY", 
        github: "https://github.com/KaledSML/SPMG-Arduino-Safety-System",
        badges: ["ARDUINO", "HARDWARE_EMBEDDED", "SISTEMAS_CONTROL", "C++"],
        description: `
            <b>Hardware Embebido para Seguridad Ambiental.</b> Sistema diseñado para la detección temprana de monóxido de carbono y gas, orientado a prevenir accidentes en hogares vulnerables. <br><br>
            Implementa una arquitectura de sensores con <b>Arduino UNO</b>, utilizando un sensor MQ para gas y un TMP36 para temperatura. El firmware gestiona una lógica de semáforo (Normal/Alerta/Crítico) y conversión ADC para monitoreo en tiempo real a través de un display LCD 16x2. <br><br>
            Este proyecto documenta mis fundamentos en lógica de programación y electrónica aplicada, demostrando el uso de la tecnología como una herramienta de protección civil de bajo costo.
        `
    },
    'pymenton': {
        title: "PYMENTON: EDTECH & INCLUSIÓN SOCIAL",
        videoID: "a94pk1NaHpw", 
        github: "https://github.com/KaledSML/pymenton-edtech-platform",
        badges: ["EDTECH", "GAMIFICACIÓN", "BUDDYPRESS", "OPTIMIZACIÓN_WPO"],
        description: `
            <b>Ecosistema Digital de Aprendizaje Gamificado.</b> Framework diseñado como respuesta estratégica a la brecha digital, transformando la vulnerabilidad tecnológica en autonomía comercial. <br><br>
            La arquitectura integra un <b>LMS (LearnPress)</b> para formación técnica, una <b>Capa Social (BuddyPress)</b> para mentorías y un sistema de <b>Gamificación (GamiPress)</b> para incentivar la retención. <br><br>
            Optimizado mediante protocolos <b>WPO (Web Performance Optimization)</b> para garantizar acceso desde dispositivos con recursos limitados y bajo consumo de datos, alineándose con el programa "Digitaliza tu Pyme".
        `
    },
    'veranum': {
        title: "VERANUM: TRANSFORMACIÓN DIGITAL",
        videoID: "6A6aBmMGhFw", 
        github: "https://github.com/KaledSML/veranum-hotel-management",
        badges: ["MYSQL", "WORDPRESS_CMS", "OPTIMIZACIÓN_PROCESOS", "QA_VALIDATED"],
        description: `
            <b>Modernización de Sistemas para Gestión Hotelera.</b> Proyecto enfocado en mitigar la obsolescencia operativa mediante la automatización del ciclo de reservas y el control de activos. <br><br>
            La solución incluye un <b>Motor de Reservas dinámico</b>, un sistema de gestión de inventarios para restaurante/backoffice y una arquitectura relacional en <b>MySQL</b> para asegurar la integridad de los datos. <br><br>
            Desarrollado bajo una metodología <b>Fast-Track de 20 días</b>, integrando ingeniería de requerimientos, modelado UML y optimización de rendimiento (WPO) para mejorar la competitividad digital de una cadena con 30 años de trayectoria.
        `
    },
    'shiro': {
        title: "SHIRO'S COFFEE: DELIVERY UX",
        videoID: "x3sDgAEe2fk", 
        github: "#", // Al ser No-Code, no hay repo, pero se compensa con el video demo
        badges: ["MVP", "UX_DESIGN", "GOODBARBER", "CAUSA_ANIMAL"],
        description: `
            <b>Prototipado de App Móvil para Cafetería Temática.</b> Diseño de una solución de delivery centrada en la experiencia del usuario y el apoyo a la adopción de gatos rescatados. <br><br>
            El proyecto abarca desde la gestión de perfiles y múltiples direcciones de envío hasta el flujo completo de compra (User Journey). <br><br>
            Desarrollado con <b>GoodBarber</b>, demuestra mi habilidad para transformar conceptos creativos en productos mínimos viables funcionales, priorizando la conexión emocional con el cliente y la eficiencia logística en nichos de mercado específicos.
        `
    },
    'data_science': {
        title: "DATA SCIENCE & ANALYTICS PORTFOLIO",
        videoID: "F-3e8exnVJY", // Al ser un repo de notebooks y scripts, podemos usar el placeholder de análisis
        github: "https://github.com/KaledSML/Applied-Data-Science",
        badges: ["RANDOM_FOREST", "SQL_PRO", "EDA", "SCIKIT-LEARN"],
        description: `
            <b>Arquitectura y Análisis Predictivo de Datos.</b> Repositorio especializado en la transformación de datos crudos en inteligencia de negocio. <br><br>
            Incluye modelos de <b>Machine Learning</b> con un 93.6% de precisión en predicción de radiación solar y sistemas de clasificación para potabilidad del agua (89% Accuracy). <br><br>
            Además, integra diseño de bases de datos relacionales con <b>SAP PowerDesigner</b> y SQL Server, implementando Stored Procedures y vistas de trazabilidad 360° para gestión logística compleja.
        `
    }

};

// 3. LÓGICA DEL MODAL
const modal = document.getElementById('video-modal');
const iframe = document.getElementById('pitch-video');
const closeModalBtn = document.getElementById('close-modal');

function openProject(projectId) {
    const data = projectsData[projectId];
    if(!data) return;

    // Rellenar contenido
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-description').innerHTML = data.description;
    document.getElementById('modal-github').href = data.github;
    
    // Badges
    const badgeContainer = document.getElementById('modal-badges');
    badgeContainer.innerHTML = '';
    data.badges.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'badge';
        span.innerText = tag;
        badgeContainer.appendChild(span);
    });

    // Cargar video y mostrar modal
    iframe.src = `https://www.youtube.com/embed/${data.videoID}?autoplay=1`;
    modal.classList.add('active');
}

// Evento para el botón del perfil (Pitch)
document.getElementById('open-pitch').addEventListener('click', () => {
    openProject('pitch-principal');
});

// Evento para cerrar
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    iframe.src = "";
});

// 4. NAVEGACIÓN DOCK
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const indicator = document.querySelector('.nav-indicator');

function switchSection(targetId, button) {
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
    navBtns.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    updateIndicator(button);
}

function updateIndicator(button) {
    indicator.style.width = `${button.offsetWidth}px`;
    indicator.style.left = `${button.offsetLeft}px`;
}

navBtns.forEach(btn => {
    btn.addEventListener('click', () => switchSection(btn.getAttribute('data-section'), btn));
});

// 5. INICIALIZACIÓN
window.addEventListener('resize', () => {
    initCanvas();
    updateIndicator(document.querySelector('.nav-btn.active'));
});

initCanvas();
createParticles();
animate();
window.onload = () => updateIndicator(document.querySelector('.nav-btn.active'));






const slider = document.getElementById('carousel-slider');
const track = document.getElementById('carousel-track');
const cards = document.querySelectorAll('.info-card-3d');

slider.addEventListener('input', (e) => {
    const value = e.target.value;
    
    // Rotar el carrusel
    track.style.transform = `rotateY(${-value}deg)`;
    
    // Calcular qué tarjeta está al frente (cada 90 grados)
    // El Math.abs asegura que funcione si el slider diera valores negativos
    const activeIndex = Math.round(value / 90) % 4;

    cards.forEach((card, i) => {
        // Normalizamos el índice para que coincida con --i
        const isFocused = i === (activeIndex < 0 ? 4 + activeIndex : activeIndex);
        
        if (isFocused) {
            card.style.opacity = "1";
            card.style.filter = "brightness(1.2) drop-shadow(0 0 15px rgba(0, 255, 194, 0.4))";
            card.style.border = "1px solid var(--primary)";
        } else {
            card.style.opacity = "0.2";
            card.style.filter = "brightness(0.5) blur(2px)";
            card.style.border = "1px solid rgba(0, 255, 194, 0.1)";
        }
    });

    // EFECTO EXTRA: El brillo de la barra cambia según la posición
    const intensity = 0.5 + (value / 360); 
    slider.style.boxShadow = `0 0 ${intensity * 10}px var(--primary)`;
});
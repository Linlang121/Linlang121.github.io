// 页面加载动画
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  gsap.to(loader, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      loader.style.display = 'none';
      initAnimations();
    }
  });
});

// 初始化所有动画
function initAnimations() {
  // Hero 区域动画
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  
  const tl = gsap.timeline();
  tl.from('.avatar-container', {
    scale: 0,
    rotation: 360,
    duration: 1,
    ease: 'back.out(1.7)'
  })
  .from('.hero-title', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.tagline', {
    y: 30,
    opacity: 0,
    duration: 0.6
  }, '-=0.4')
  .from('.social-icon', {
    scale: 0,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
    ease: 'back.out(1.7)'
  }, '-=0.3');

  // 滚动触发动画
  gsap.from('.section-title', {
    scrollTrigger: {
      trigger: '.section-title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  });

  gsap.from('.skill-card', {
    scrollTrigger: {
      trigger: '.skills-grid',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    stagger: 0.15,
    ease: 'back.out(1.7)'
  });

  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.project-grid',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 100,
    opacity: 0,
    rotationY: 45,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // ScrollReveal 备用动画
  ScrollReveal().reveal('.section-title', { 
    delay: 200, 
    distance: '50px', 
    origin: 'top',
    reset: false
  });
}

// 增强的粒子系统
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 150;
let mouse = {
  x: null,
  y: null,
  radius: 100
};

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('mouseout', () => {
  mouse.x = null;
  mouse.y = null;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + 5;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.hue = Math.random() * 60 + 240; // 紫色到青色范围
  }

  update() {
    // 鼠标交互
    if (mouse.x && mouse.y) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const force = (mouse.radius - distance) / mouse.radius;
      const forceX = (dx / distance) * force * this.density;
      const forceY = (dy / distance) * force * this.density;

      if (distance < mouse.radius) {
        this.x -= forceX;
        this.y -= forceY;
      } else {
        if (this.x !== this.baseX) {
          const dx = this.x - this.baseX;
          this.x -= dx / 10;
        }
        if (this.y !== this.baseY) {
          const dy = this.y - this.baseY;
          this.y -= dy / 10;
        }
      }
    } else {
      // 缓慢回到原始位置
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }

    // 边界检测
    if (this.x < 0 || this.x > canvas.width) {
      this.speedX = -this.speedX;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.speedY = -this.speedY;
    }

    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw() {
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.size * 2
    );
    gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, 0.8)`);
    gradient.addColorStop(1, `hsla(${this.hue}, 70%, 60%, 0)`);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}
init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    
    // 连线
    for (let j = i + 1; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 120) {
        const opacity = (1 - distance / 120) * 0.5;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(142, 111, 255, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
  
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// 鼠标跟随效果 - 无滞后
const mouseFollower = document.querySelector('.mouse-follower');

document.addEventListener('mousemove', (e) => {
  mouseFollower.style.left = e.clientX + 'px';
  mouseFollower.style.top = e.clientY + 'px';
});

// 导航栏滚动效果
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: 80
        },
        ease: 'power2.inOut'
      });
    }
  });
});

// 移动端菜单
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// 卡片3D倾斜效果
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
});

// 社交图标悬停效果
document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('mouseenter', function() {
    gsap.to(this, {
      scale: 1.2,
      rotation: 360,
      duration: 0.5,
      ease: 'back.out(1.7)'
    });
  });
  
  icon.addEventListener('mouseleave', function() {
    gsap.to(this, {
      scale: 1,
      rotation: 0,
      duration: 0.3
    });
  });
});

// —— 中英双语 ——
const translations = {
  zh: {
    loader: '加载中...',
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.education': '教育',
    'nav.skills': '技能',
    'nav.projects': '项目',
    'nav.contact': '联系',
    'hero.tagline': 'MSc 游戏工程 · AI时代原生技术艺术家',
    'hero.avail': '可到岗：2026年8月中旬 · 可连续实习6个月（5天/周）',
    'about.title': '关于我',
    'about.intro': '我如何思考与构建',
    'about.1.title': '拥抱“认知放大”',
    'about.1.body': '我是AI时代的AI原生开发者。我不把工具视作简单的辅助，而是将其作为认知的“放大器”。借助 GPT 和 Cursor，我能在极短时间内跨越技术壁垒，构建出可运行的原型。对我而言，学习本身就是一项通过快速迭代和AI对齐来完成的工程任务。',
    'about.2.title': '算法思维，人文决策',
    'about.2.body': '我习惯用类似AI模型的思维来处理复杂生活——将决策过程拆解为影响因子与加权矩阵，再辅以客观的事实检索，通过算法辅助进行量化权衡。但这并不意味着冷冰冰的逻辑，这种方式反而让我跳出了直觉的偏见，能更理智地在复杂与不确定性中找到最优解。',
    'about.3.title': '架构思维与极致韧性',
    'about.3.body': '我倾向于把复杂事物降维拆解为一个个可独立攻破的最小闭环。这种工程思维不仅限于写代码，更融入了我的生活。我不惧怕任何难啃的骨头，无论是复杂的系统交互，还是《艾尔登法环》与《只狼》中的高难度Boss战——我享受在失败中分析机制、优化策略，直到获得最终成就感的那个过程。',
    'about.4.title': '审美是我的罗盘',
    'about.4.body': '扎实的技术必须承载好的内容。我追求高审美，并认为审美不仅是视觉的装饰，更是对人内心状态的投射。我渴望创作能引发强烈情感共鸣的作品，因为在我看来，技术是构建世界的骨架，而审美则是赋予它灵魂的血肉。',
    'edu.title': '教育背景',
    'edu.warwick.school': '英国华威大学 (University of Warwick)',
    'edu.warwick.meta': '2025.10 – 2027.01（预期毕业）· 英国 考文垂',
    'edu.warwick.degree': '理学硕士 (MSc) · Game Engineering（游戏工程）',
    'edu.bjfu.school': '北京林业大学',
    'edu.bjfu.meta': '2021.09 – 2025.07 · 中国 北京',
    'edu.bjfu.degree': '理学学士 (BSc) · 地理信息科学 (GIS)',
    'skills.title': '专业技能',
    'skills.engines.title': '引擎与交互工具',
    'skills.lang.title': '编程语言',
    'skills.ai.title': 'AI 与数据科学',
    'skills.media.title': '多媒体与交互创作',
    'skills.workflow.title': '工作流与专业知识',
    'skills.tag.agile': '敏捷开发 (Agile)',
    'skills.tag.hci': '人机交互 (HCI)',
    'skills.tag.ux': '用户体验 (UX)',
    'skills.tag.av': '视听反馈设计',
    'skills.tag.avprep': '音视频资产处理 (Audio/Video Asset Prep)',
    'skills.tag.avrt': '实时视听反馈设计',
    'skills.tag.asset': '媒体资产整合',
    'skills.tag.blackbox': '黑盒测试',
    'skills.tag.collab': '团队沟通与协作',
    'projects.title': '核心项目',
    'projects.view': '查看项目 →',
    'projects.watch': '观看视频 →',
    'p1.title': '跨次元交互游戏',
    'p1.subtitle': 'Action-Survival-Football · 独立开发 · UE5 + AI Vision',
    'p1.back': 'UE5 物理脉冲与球体追踪 · OpenCV/MediaPipe 击掌识别 · 低延迟跨平台通信闭环',
    'p1.f1': '✓ Blueprints 核心交互与全局状态管理',
    'p1.f2': '✓ 21 点手部骨骼与防误触击掌识别',
    'p1.f3': '✓ Python ↔ UE5 OSC / UDP 超低延迟链路',
    'p2.title': '自动化渲染捕获系统',
    'p2.subtitle': 'Unity + CNN · 核心开发者 · 2026.02 – 至今',
    'p2.back': '引擎内自动漫游截图生成训练集 · CNN 识别渲染异常（如材质丢失）',
    'p2.f1': '✓ Unity C# 自动相机漫游与批量截图',
    'p2.f2': '✓ PyTorch CNN 图像分类管线',
    'p2.f3': '✓ AI × 游戏引擎工程流落地探索',
    'p3.title': '「沙漠坦克」UE5游戏团队开发',
    'p3.subtitle': 'Team Leader · 敏捷研发 · 2025.11 – 2026.01',
    'p3.back': '主导架构与研发排期 · Git 分支策略与 Code Review · 场景与多媒体资产整合调优',
    'p3.f1': '✓ 团队架构、排期与版本冲突治理',
    'p3.f2': '✓ 高频 Code Review 与分支管理',
    'p3.f3': '✓ 3D 场景 / 音效 / UI 整合与性能调优',
    'contact.title': '联系我',
    'contact.text': '求职意向：互动内容开发实习生 · 欢迎沟通实习机会',
    'contact.btn': '发送邮件',
    footer: '© 2026 Linlang Zou · MSc Game Engineering'
  },
  en: {
    loader: 'Loading...',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.tagline': 'MSc Game Engineering · Creative Technologist | AI-Native',
    'hero.avail': 'Available mid-August 2026 · 6-month internship · 5 days/week',
    'about.title': 'About Me',
    'about.intro': 'How I think and build',
    'about.1.title': 'Embracing Cognitive Amplification',
    'about.1.body': 'I am an AI-native developer of the AI era. I do not treat tools as mere assistants, but as amplifiers of cognition. With GPT and Cursor, I can cross technical barriers in a short time and ship runnable prototypes. For me, learning itself is an engineering task completed through rapid iteration and alignment with AI.',
    'about.2.title': 'Algorithmic Thinking, Human Decision-Making',
    'about.2.body': 'I approach complex life decisions the way AI models do—breaking choices into influence factors and weighted matrices, supported by objective fact retrieval and algorithmic trade-offs. This is not cold logic; it helps me escape intuitive bias and find better solutions amid complexity and uncertainty.',
    'about.3.title': 'Systems Thinking & Extreme Resilience',
    'about.3.body': 'I prefer to reduce complex problems into smallest closed loops that can be conquered one by one. This engineering mindset goes beyond code into daily life. I do not fear hard problems—whether intricate system interactions or bosses in Elden Ring and Sekiro. I enjoy analyzing mechanics after failure, refining strategy, and earning that final sense of achievement.',
    'about.4.title': 'Aesthetics as My Compass',
    'about.4.body': 'Solid technology must carry meaningful content. I pursue high aesthetic standards: aesthetics is not decoration, but a core force that shapes interactive experience. I long to create work that sparks strong emotional resonance—technology as the skeleton of a world, aesthetics as the flesh and soul that give it life.',
    'edu.title': 'Education',
    'edu.warwick.school': 'University of Warwick',
    'edu.warwick.meta': 'Oct 2025 – Jan 2027 (Expected) · Coventry, UK',
    'edu.warwick.degree': 'MSc · Game Engineering',
    'edu.bjfu.school': 'Beijing Forestry University',
    'edu.bjfu.meta': 'Sep 2021 – Jul 2025 · Beijing, China',
    'edu.bjfu.degree': 'BSc · Geographic Information Science (GIS)',
    'skills.title': 'Professional Skills',
    'skills.engines.title': 'Engines & Interaction Tools',
    'skills.lang.title': 'Programming Languages',
    'skills.ai.title': 'AI & Data Science',
    'skills.media.title': 'Multimedia & Interactive Creation',
    'skills.workflow.title': 'Workflow & Expertise',
    'skills.tag.agile': 'Agile',
    'skills.tag.hci': 'Human-Computer Interaction (HCI)',
    'skills.tag.ux': 'User Experience (UX)',
    'skills.tag.av': 'Audiovisual Feedback Design',
    'skills.tag.avprep': 'Audio/Video Asset Prep',
    'skills.tag.avrt': 'Real-time Audiovisual Feedback Design',
    'skills.tag.asset': 'Media Asset Integration',
    'skills.tag.blackbox': 'Black-box Testing',
    'skills.tag.collab': 'Team Communication & Collaboration',
    'projects.title': 'Featured Projects',
    'projects.view': 'View Project →',
    'projects.watch': 'Watch Video →',
    'p1.title': 'Cross-Dimensional Interactive Game',
    'p1.subtitle': 'Action-Survival-Football · Solo Dev · UE5 + AI Vision',
    'p1.back': 'UE5 physical impulse & sphere tracing · MediaPipe high-five detection · low-latency OSC/UDP loop',
    'p1.f1': '✓ Blueprints interaction & global state',
    'p1.f2': '✓ 21-point hand skeleton & high-five detection',
    'p1.f3': '✓ Python ↔ UE5 OSC / UDP low-latency link',
    'p2.title': 'Automated Render Capture System',
    'p2.subtitle': 'Unity + CNN · Core Developer · Feb 2026 – Present',
    'p2.back': 'Auto camera roaming & screenshot datasets · CNN detects render anomalies',
    'p2.f1': '✓ Unity C# camera roaming & batch capture',
    'p2.f2': '✓ PyTorch CNN classification pipeline',
    'p2.f3': '✓ AI × game-engine workflow exploration',
    'p3.title': 'Desert Tank — 3D Multiplayer',
    'p3.subtitle': 'Team Leader · Agile · Nov 2025 – Jan 2026',
    'p3.back': 'Led architecture & schedule · Git branching & code review · asset integration',
    'p3.f1': '✓ Team architecture & conflict resolution',
    'p3.f2': '✓ Frequent code reviews & branch strategy',
    'p3.f3': '✓ Scene / audio / UI integration & tuning',
    'contact.title': 'Get In Touch',
    'contact.text': 'Seeking: Interactive Content Developer Intern · Open to opportunities',
    'contact.btn': 'Send Email',
    footer: '© 2026 Linlang Zou · MSc Game Engineering'
  }
};

let currentLang = localStorage.getItem('site-lang') || 'zh';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) {
      el.textContent = dict[key];
    }
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.textContent = lang === 'zh' ? 'EN' : '中文';
  }
}

document.getElementById('langToggle')?.addEventListener('click', () => {
  applyLanguage(currentLang === 'zh' ? 'en' : 'zh');
});

applyLanguage(currentLang);

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
  .from('.hero-avail', {
    y: 20,
    opacity: 0,
    duration: 0.5
  }, '-=0.35')
  .from('.social-icon', {
    scale: 0,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
    ease: 'back.out(1.7)'
  }, '-=0.3');

  // 滚动触发动画（immediateRender: false，避免触发前永久 opacity:0）
  gsap.utils.toArray('.section-title').forEach((title) => {
    gsap.fromTo(title,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        immediateRender: false,
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );
  });

  gsap.fromTo('.skill-card',
    { y: 50, opacity: 0, scale: 0.8 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.7)',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    }
  );

  gsap.fromTo('.about-card',
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.about-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    }
  );

  gsap.fromTo('.edu-card',
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.edu-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    }
  );

  gsap.fromTo('.project-card',
    { y: 100, opacity: 0, rotationY: 45 },
    {
      y: 0,
      opacity: 1,
      rotationY: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.project-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    }
  );

  ScrollTrigger.refresh();
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

// 项目视频弹窗
const videoModal = document.getElementById('videoModal');
const projectVideo = document.getElementById('projectVideo');

function openProjectVideo(src) {
  if (!videoModal || !projectVideo || !src) return;
  projectVideo.muted = true;
  projectVideo.setAttribute('muted', '');
  projectVideo.src = src;
  videoModal.hidden = false;
  document.body.classList.add('video-modal-open');
  projectVideo.play().catch(() => {});
}

function closeProjectVideo() {
  if (!videoModal || !projectVideo) return;
  projectVideo.pause();
  projectVideo.removeAttribute('src');
  projectVideo.load();
  videoModal.hidden = true;
  document.body.classList.remove('video-modal-open');
}

document.querySelectorAll('.btn-video').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openProjectVideo(btn.getAttribute('data-video'));
  });
});

videoModal?.querySelectorAll('[data-close-video]').forEach((el) => {
  el.addEventListener('click', closeProjectVideo);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoModal && !videoModal.hidden) {
    closeProjectVideo();
  }
});

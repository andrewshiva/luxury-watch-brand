/* ═══════════════════════════════════════════════════
   FRANCK MULLER VANGUARD SMURFETTE — MAIN.JS
   GSAP Animations · Lenis · Modal · Nav · Canvas
   ═══════════════════════════════════════════════════ */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

/* ─── LENIS SMOOTH SCROLLING ─── */
const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 1,
  infinite: false,
  gestureOrientation: 'vertical',
  normalizeWheel: true,
  smoothWheel: true,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

/* ─── 1. HERO ANIMATIONS ─── */
const initHeroAnimations = () => {
  const bgVideo = document.querySelector('.bg-video');
  const heroTextBg = document.querySelector('.hero-text-bg');
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroCtaGroup = document.querySelector('.hero-cta-group');
  const nav = document.querySelector('.nav');
  const heroDetails = document.querySelector('.hero-details');

  if (!bgVideo) return;

  /* -- Entrance Timeline -- */
  const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  gsap.set(bgVideo, { scale: 1.2, opacity: 0 });
  gsap.set(heroTextBg, { scale: 0.5, opacity: 0 });
  gsap.set([heroTitle, heroSubtitle, heroCtaGroup], { y: 60, opacity: 0 });
  gsap.set(nav, { y: -100, opacity: 0 });

  heroTl
    .to(bgVideo, { scale: 1.05, opacity: 1, duration: 2.5, ease: 'power2.out' })
    .to(heroTextBg, { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }, '-=1.5')
    .to(heroTitle, { y: 0, opacity: 1, duration: 1.4, ease: 'power4.out' }, '-=1.2')
    .to(heroSubtitle, { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }, '-=0.9')
    .to(heroCtaGroup, { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }, '-=0.8')
    .to(nav, { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }, '-=0.6');

  /* -- Scroll-Driven Parallax -- */
  gsap.to(bgVideo, {
    scale: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to(heroDetails, {
    y: -150,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to(heroTextBg, {
    y: -250,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
    },
  });
};

/* ─── 2. PRODUCT REVEAL ANIMATIONS ─── */
const initProductRevealAnimations = () => {
  const title = document.querySelector('.product-reveal-title');
  const subtitle = document.querySelector('.product-reveal-subtitle');
  const ctaGroup = document.querySelector('.product-reveal-cta-group');
  const textBg = document.querySelector('.product-reveal-text-bg');
  const details = document.querySelector('.product-reveal-details');
  const bgImg = document.querySelector('.product-reveal-bg-img');

  if (!title) return;

  gsap.from(title, {
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top 55%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from(subtitle, {
    y: 30,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top 50%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from(ctaGroup, {
    y: 30,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top 45%',
      toggleActions: 'play none none reverse',
    },
  });

  /* -- Scroll-Driven Background Motion -- */
  if (bgImg) {
    gsap.to(bgImg, {
      scale: 1.15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.product-reveal',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });
  }

  gsap.to(details, {
    y: -150,
    ease: 'none',
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to(textBg, {
    y: -250,
    ease: 'none',
    scrollTrigger: {
      trigger: '.product-reveal',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
    },
  });
};

/* ─── 3. HERITAGE ANIMATIONS ─── */
const initHeritageAnimations = () => {
  const eyebrow = document.querySelector('.heritage-eyebrow');
  const title = document.querySelector('.heritage-title');
  const divider = document.querySelector('.heritage-divider');
  const bodies = document.querySelectorAll('.heritage-body');
  const link = document.querySelector('.heritage-link');
  const stats = document.querySelectorAll('.heritage-stat');

  if (!title) return;

  const heritageTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.heritage',
      start: 'top 55%',
      toggleActions: 'play none none reverse',
    },
  });

  heritageTl
    .from(eyebrow, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' })
    .from(title, { y: 40, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.5')
    .from(divider, { scaleX: 0, transformOrigin: 'right center', duration: 0.8, ease: 'power2.out' }, '-=0.5')
    .from(bodies, { y: 25, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }, '-=0.4')
    .from(link, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .from(stats, { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.4');
};

/* ─── 4. ETHOS / COLLECTION ANIMATIONS ─── */
const initEthosAnimations = () => {
  const section = document.querySelector('.ethos');
  const bgImages = document.querySelectorAll('.ethos-bg-img');
  const variants = document.querySelectorAll('.ethos-main');
  const nextBtns = document.querySelectorAll('.ethos-next-btn');

  if (!section || !bgImages.length) return;

  /* -- Background Parallax -- */
  bgImages.forEach((img) => {
    gsap.to(img, {
      scale: 1.1,
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.ethos',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  /* -- Entrance Animation -- */
  const activeVariant = document.querySelector('.ethos-main.active');
  if (activeVariant) {
    const textSide = activeVariant.querySelector('.ethos-text-side');
    const watchImg = activeVariant.querySelector('.ethos-watch-img');

    gsap.from(textSide, {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.ethos',
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(watchImg, {
      x: 100,
      opacity: 0,
      duration: 1.4,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.ethos',
        start: 'top 55%',
        toggleActions: 'play none none reverse',
      },
    });
  }

  /* -- Variant Switcher -- */
  let isAnimating = false;

  nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (isAnimating) return;
      isAnimating = true;

      const targetVariant = btn.dataset.target;
      const currentActive = document.querySelector('.ethos-main.active');
      const nextActive = document.querySelector(`.ethos-main.variant-${targetVariant}`);
      const currentBg = document.querySelector('.ethos-bg-img.active');
      const nextBg = document.querySelector(`.ethos-bg-${targetVariant}`);

      if (!nextActive || !nextBg || currentActive === nextActive) {
        isAnimating = false;
        return;
      }

      const currentText = currentActive.querySelector('.ethos-text-side');
      const currentWatch = currentActive.querySelector('.ethos-watch-img');
      const nextText = nextActive.querySelector('.ethos-text-side');
      const nextWatch = nextActive.querySelector('.ethos-watch-img');

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating = false;
        },
      });

      /* Slide out current */
      tl.to(currentText, { x: -100, opacity: 0, duration: 0.5, ease: 'power2.in' }, 0)
        .to(currentWatch, { x: -150, opacity: 0, duration: 0.5, ease: 'power2.in' }, 0)
        .add(() => {
          /* Swap active classes */
          currentActive.classList.remove('active');
          nextActive.classList.add('active');
          currentBg.classList.remove('active');
          nextBg.classList.add('active');

          /* Set initial position for incoming */
          gsap.set(nextText, { x: 100, opacity: 0 });
          gsap.set(nextWatch, { x: 150, opacity: 0 });
        }, 0.5)
        /* Slide in next */
        .to(nextText, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0.55)
        .to(nextWatch, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.55);
    });
  });
};

/* ─── 5. DISMANTLE / CRAFTSMANSHIP CANVAS ─── */
const initDismantleAnimations = () => {
  const canvas = document.getElementById('dismantle-canvas');
  const dismantleSection = document.querySelector('.dismantle');
  const header = document.querySelector('.dismantle-header');

  if (!canvas || !dismantleSection) return;

  const ctx = canvas.getContext('2d');
  const frameCount = 152;
  const images = [];
  let loadedCount = 0;

  const currentFrame = (index) => {
    const num = String(index + 1).padStart(3, '0');
    return `/assets/photo/v3/ezgif-frame-${num}.jpg`;
  };

  /* -- Preload all frames -- */
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    img.onload = () => {
      loadedCount++;
      if (loadedCount === 1) {
        drawFrame(0);
      }
    };
    images[i] = img;
  }

  const drawFrame = (index) => {
    if (!images[index] || !images[index].complete) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, w, h);

    const imgW = images[index].width;
    const imgH = images[index].height;
    const imgRatio = imgW / imgH;
    const canvasRatio = w / h;

    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawW = w;
      drawH = w / imgRatio;
      drawX = 0;
      drawY = (h - drawH) / 2;
    } else {
      drawH = h;
      drawW = h * imgRatio;
      drawX = (w - drawW) / 2;
      drawY = 0;
    }

    ctx.drawImage(images[index], drawX, drawY, drawW, drawH);
  };

  /* -- Scroll-Driven Frame Scrubbing -- */
  const frameObj = { frame: 0 };

  gsap.to(frameObj, {
    frame: frameCount - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
      trigger: '.dismantle',
      start: 'top 40%',
      end: 'bottom bottom',
      scrub: 0.5,
    },
    onUpdate: () => {
      drawFrame(Math.round(frameObj.frame));
    },
  });

  /* -- Header Slide Out -- */
  if (header) {
    gsap.to(header, {
      x: -150,
      opacity: 0,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: '.dismantle',
        start: 'top 45%',
        end: 'top 10%',
        scrub: 1,
      },
    });
  }

  /* -- Handle Resize -- */
  window.addEventListener('resize', () => {
    drawFrame(Math.round(frameObj.frame));
  });
};

/* ─── 6. SHOWCASE ANIMATIONS ─── */
const initShowcaseAnimations = () => {
  const eyebrow = document.querySelector('.showcase-eyebrow');
  const headline = document.querySelector('.showcase-headline');
  const body = document.querySelector('.showcase-body');
  const igLink = document.querySelector('.showcase-ig-link');

  if (!headline) return;

  const showcaseTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.showcase',
      start: 'top 55%',
      toggleActions: 'play none none reverse',
    },
  });

  showcaseTl
    .from(eyebrow, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' })
    .from(headline, { y: 50, opacity: 0, duration: 1.2, ease: 'power4.out' }, '-=0.5')
    .from(body, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .from(igLink, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
};

/* ─── 7. NAV SCROLL BEHAVIOR ─── */
const initNavScroll = () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let lastScroll = 0;
  const threshold = 50;

  lenis.on('scroll', ({ scroll }) => {
    if (scroll > lastScroll && scroll > threshold) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
    lastScroll = scroll;
  });
};

/* ─── 8. MODAL + SMOOTH SCROLL ─── */
const initModal = () => {
  const modal = document.getElementById('reserve-modal');
  const closeBtn = document.getElementById('modal-close');
  const openBtns = document.querySelectorAll('.open-reserve-modal');

  if (!modal) return;

  const openModal = () => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lenis.stop();
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lenis.start();
  };

  openBtns.forEach((btn) => btn.addEventListener('click', openModal));

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  /* -- Smooth Scroll for Anchor Links -- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        lenis.scrollTo(target, {
          offset: -72,
          duration: 1.2,
        });
      }
    });
  });
};

/* ─── 9. FOOTER ANIMATIONS ─── */
const initFooterAnimations = () => {
  const footerCols = document.querySelectorAll('.footer-col, .footer-brand-col');

  if (!footerCols.length) return;

  gsap.from(footerCols, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
};

/* ─── INIT ON DOM READY ─── */
document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
  initProductRevealAnimations();
  initHeritageAnimations();
  initEthosAnimations();
  initDismantleAnimations();
  initShowcaseAnimations();
  initNavScroll();
  initModal();
  initFooterAnimations();
});

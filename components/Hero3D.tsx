"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Move3d } from "lucide-react";

const IDLE_PATH = "/models/Breathing_Idle__1_.fbx";
const TYPING_PATH = "/models/Typing__1_.fbx";
const WAVING_PATH = "/models/Waving__4_.fbx";

export type ClipName = "idle" | "typing" | "waving";

interface SectionTransform {
  id: string;
  modelPos: [number, number, number];
  modelRotY: number;
  camPos: [number, number, number];
  lookAt: [number, number, number];
  clip: ClipName;
  accent: number;
}

// Clean side-margin offsets to keep UI content 100% unobstructed
const SECTION_TRANSFORMS: SectionTransform[] = [
  {
    id: "hero",
    modelPos: [1.5, 0, 0],
    modelRotY: -0.4,
    camPos: [0, 1.05, 4.2],
    lookAt: [0.3, 0.95, 0],
    clip: "idle",
    accent: 0x8b5cf6,
  },
  {
    id: "about",
    modelPos: [-1.7, 0, 0.2],
    modelRotY: 0.5,
    camPos: [0, 1.05, 4.0],
    lookAt: [-0.4, 0.95, 0],
    clip: "waving",
    accent: 0x06b6d4,
  },
  {
    id: "experience",
    modelPos: [1.7, -0.1, 0.1],
    modelRotY: -0.55,
    camPos: [0, 0.95, 3.8],
    lookAt: [0.4, 0.85, 0],
    clip: "typing",
    accent: 0x8b5cf6,
  },
  {
    id: "projects",
    modelPos: [1.8, 0, -0.3],
    modelRotY: -0.5,
    camPos: [0, 1.1, 4.2],
    lookAt: [0.4, 0.9, 0],
    clip: "typing",
    accent: 0x10b981,
  },
  {
    id: "skills",
    modelPos: [-1.7, 0, 0.1],
    modelRotY: 0.45,
    camPos: [0, 1.0, 3.8],
    lookAt: [-0.4, 0.95, 0],
    clip: "idle",
    accent: 0xf59e0b,
  },
  {
    id: "achievements",
    modelPos: [1.7, 0, 0.1],
    modelRotY: -0.45,
    camPos: [0, 1.0, 3.8],
    lookAt: [0.4, 0.95, 0],
    clip: "idle",
    accent: 0x8b5cf6,
  },
  {
    id: "contact",
    modelPos: [0, 0, 0.2],
    modelRotY: 0,
    camPos: [0, 1.05, 3.4],
    lookAt: [0, 0.95, 0],
    clip: "waving",
    accent: 0xff6b61,
  },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function getStageMessage(p: number) {
  if (p <= 35) return "Loading environment...";
  if (p <= 75) return "Loading 3D avatar...";
  return "Initializing scene...";
}

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [flashColor, setFlashColor] = useState<string | null>(null);

  const targetProgressRef = useRef(0);
  const activeSectionIdxRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    const isMobile = W < 768;

    // BUG 5: Renderer Pixel Ratio & Shadow Map Mobile Optimizations
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x050508, 1);
    renderer.shadowMap.enabled = !isMobile;
    if (!isMobile) {
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    // Scene & Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050508, 0.08);

    // Camera
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
    camera.position.set(...SECTION_TRANSFORMS[0].camPos);

    // BUG 5: Dynamic Starfield Particles (60% reduction on mobile: 2000 -> 800)
    const starCount = isMobile ? 800 : 2000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = (Math.random() - 0.5) * 55;
      starPos[i + 1] = Math.random() * 28 - 5;
      starPos[i + 2] = (Math.random() - 0.5) * 45 - 5;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xa78bfa,
      size: 0.045,
      transparent: true,
      opacity: 0.5,
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // Dynamic Holographic Floor Disc
    const floorGeo = new THREE.CircleGeometry(3.2, 64);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a14,
      roughness: 0.4,
      metalness: 0.85,
      transparent: true,
      opacity: 0.7,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.01;
    floor.receiveShadow = !isMobile;
    scene.add(floor);

    // Circular Floor Ring Glow
    const ringGeo = new THREE.RingGeometry(2.2, 2.25, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const floorRing = new THREE.Mesh(ringGeo, ringMat);
    floorRing.rotation.x = -Math.PI / 2;
    floorRing.position.y = 0.001;
    scene.add(floorRing);

    // ==========================================
    // SLEEK 3D MECHANICAL CYBER KEYBOARD & DESK
    // ==========================================
    const workstationGroup = new THREE.Group();

    // 1. Cyber Glass Desk Surface
    const deskGeo = new THREE.BoxGeometry(0.85, 0.015, 0.36);
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a16,
      roughness: 0.15,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85,
    });
    const deskMesh = new THREE.Mesh(deskGeo, deskMat);
    deskMesh.position.set(0, 0.56, 0.38);
    workstationGroup.add(deskMesh);

    const deskEdgesMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.6,
    });
    const deskEdges = new THREE.LineSegments(new THREE.EdgesGeometry(deskGeo), deskEdgesMat);
    deskMesh.add(deskEdges);

    // Desk Metal Legs
    const legGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.56, 16);
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x141426,
      metalness: 0.9,
      roughness: 0.3,
    });

    const legLeft = new THREE.Mesh(legGeo, legMat);
    legLeft.position.set(-0.36, 0.28, 0.38);
    workstationGroup.add(legLeft);

    const legRight = new THREE.Mesh(legGeo, legMat);
    legRight.position.set(0.36, 0.28, 0.38);
    workstationGroup.add(legRight);

    // 2. 3D Mechanical Cyber Keyboard Chassis
    const kbChassisGeo = new THREE.BoxGeometry(0.48, 0.022, 0.20);
    const kbChassisMat = new THREE.MeshStandardMaterial({
      color: 0x121224,
      roughness: 0.2,
      metalness: 0.95,
    });
    const kbChassis = new THREE.Mesh(kbChassisGeo, kbChassisMat);
    kbChassis.position.set(0, 0.578, 0.38);
    workstationGroup.add(kbChassis);

    // Keyboard Chassis Neon Outline
    const kbEdgesMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.7,
    });
    const kbEdges = new THREE.LineSegments(new THREE.EdgesGeometry(kbChassisGeo), kbEdgesMat);
    kbChassis.add(kbEdges);

    // 3. Backlit Glowing Keycaps Surface
    const keyGeo = new THREE.PlaneGeometry(0.44, 0.16);
    const keyMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.45,
      roughness: 0.2,
    });
    const keyboardKeys = new THREE.Mesh(keyGeo, keyMat);
    keyboardKeys.rotation.x = -Math.PI / 2;
    keyboardKeys.position.set(0, 0.59, 0.38);
    workstationGroup.add(keyboardKeys);

    // Keyboard Underglow Light
    const kbLight = new THREE.PointLight(0x06b6d4, 1.2, 1.5);
    kbLight.position.set(0, 0.57, 0.38);
    workstationGroup.add(kbLight);

    scene.add(workstationGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(2, 4, 3);
    keyLight.castShadow = !isMobile;
    if (!isMobile) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
    }
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x06b6d4, 0.65);
    fillLight.position.set(-3, 2, -1);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(SECTION_TRANSFORMS[0].accent, 9, 12);
    rimLight.position.set(-1.5, 2.5, -2);
    scene.add(rimLight);

    const rimColor = new THREE.Color(SECTION_TRANSFORMS[0].accent);
    const rimTarget = new THREE.Color(SECTION_TRANSFORMS[0].accent);

    // Animation Mixer & Actions setup
    let mixer: THREE.AnimationMixer | null = null;
    const actions: Record<ClipName, THREE.AnimationAction | null> = {
      idle: null,
      typing: null,
      waving: null,
    };
    let currentClip: ClipName = "idle";
    let modelRoot: THREE.Group | null = null;

    function transitionToClip(name: ClipName) {
      if (name === currentClip) return;

      const prevAction = actions[currentClip];
      const nextAction = actions[name];

      if (nextAction) {
        if (prevAction) {
          prevAction.fadeOut(0.4);
        }
        nextAction.reset().fadeIn(0.4).play();
        currentClip = name;
      }
    }

    // BUG 1: Lerp-Based Smooth Loader Progress Loop
    let progressTimer: NodeJS.Timeout;
    let fadeTimer: NodeJS.Timeout;
    let isUnmounted = false;

    // Loading Manager
    const manager = new THREE.LoadingManager();
    manager.onProgress = (_, loaded, total) => {
      const pct = Math.round((loaded / total) * 100);
      targetProgressRef.current = Math.min(pct, 95);
    };

    manager.onLoad = () => {
      targetProgressRef.current = 100;
      if (actions.idle) actions.idle.play();

      // BUG 2 FIX: Trigger ScrollTrigger position refresh immediately after load
      setTimeout(() => {
        ScrollTrigger.refresh();
        pageST.update();
      }, 150);
    };

    // Smooth Lerp animation loop for displayedProgress
    let lerpAnimId: number;
    const updateProgressLerp = () => {
      setDisplayedProgress((prev) => {
        const target = targetProgressRef.current;
        const diff = target - prev;
        if (Math.abs(diff) < 0.15) {
          if (target === 100 && prev < 100) {
            // Reached 100%! Hold 400ms so user sees completion, then fade out
            progressTimer = setTimeout(() => {
              if (!isUnmounted) {
                setIsFadingOut(true);
                fadeTimer = setTimeout(() => {
                  if (!isUnmounted) setIsLoaded(true);
                }, 600);
              }
            }, 400);
          }
          return target;
        }
        return prev + diff * 0.08;
      });
      lerpAnimId = requestAnimationFrame(updateProgressLerp);
    };
    updateProgressLerp();

    const loader = new FBXLoader(manager);

    // 1. Load Idle Base Mesh
    loader.load(
      IDLE_PATH,
      (idleObj) => {
        modelRoot = idleObj;
        idleObj.scale.setScalar(0.01);
        idleObj.position.set(...SECTION_TRANSFORMS[0].modelPos);
        idleObj.rotation.y = SECTION_TRANSFORMS[0].modelRotY;

        idleObj.traverse((c) => {
          const mesh = c as THREE.Mesh;
          if (mesh.isMesh) {
            mesh.castShadow = !isMobile;
            mesh.receiveShadow = !isMobile;
          }
        });
        scene.add(idleObj);

        mixer = new THREE.AnimationMixer(idleObj);
        if (idleObj.animations[0]) {
          actions.idle = mixer.clipAction(idleObj.animations[0]);
          actions.idle.setLoop(THREE.LoopRepeat, Infinity);
        }

        // 2. Load Typing Animation
        loader.load(
          TYPING_PATH,
          (typingObj) => {
            if (typingObj.animations[0] && mixer) {
              actions.typing = mixer.clipAction(typingObj.animations[0]);
              actions.typing.setLoop(THREE.LoopRepeat, Infinity);
            }
          },
          undefined,
          (err) => console.warn("Failed typing anim", err)
        );

        // 3. Load Waving Animation
        loader.load(
          WAVING_PATH,
          (wavingObj) => {
            if (wavingObj.animations[0] && mixer) {
              actions.waving = mixer.clipAction(wavingObj.animations[0]);
              actions.waving.setLoop(THREE.LoopRepeat, Infinity);
            }
          },
          undefined,
          (err) => console.warn("Failed waving anim", err)
        );
      },
      undefined,
      (err) => {
        console.error("Error loading 3D avatar base model", err);
        targetProgressRef.current = 100;
      }
    );

    // Mouse Tracking for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Targets for lerping
    const targetModelPos = new THREE.Vector3(...SECTION_TRANSFORMS[0].modelPos);
    let targetModelRotY = SECTION_TRANSFORMS[0].modelRotY;
    const currentModelPos = new THREE.Vector3(...SECTION_TRANSFORMS[0].modelPos);
    let currentModelRotY = SECTION_TRANSFORMS[0].modelRotY;

    const targetCamPos = new THREE.Vector3(...SECTION_TRANSFORMS[0].camPos);
    const targetLookAt = new THREE.Vector3(...SECTION_TRANSFORMS[0].lookAt);
    const currentCamPos = new THREE.Vector3(...SECTION_TRANSFORMS[0].camPos);
    const currentLookAt = new THREE.Vector3(...SECTION_TRANSFORMS[0].lookAt);

    let scrollProgress = 0;

    // Responsive screen factor for model placement
    function getScreenMultiplier() {
      const w = window.innerWidth;
      if (w < 640) return { posX: 0.15, scale: 0.0065, posZ: -0.8 }; // Phone / Mobile
      if (w < 768) return { posX: 0.3, scale: 0.0075, posZ: -0.6 };  // Large Phone
      if (w < 1024) return { posX: 0.55, scale: 0.0088, posZ: -0.3 }; // Tablet
      return { posX: 1.0, scale: 0.01, posZ: 0 };                    // Desktop
    }

    // ScrollTrigger across page body
    const pageST = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
      onUpdate: (self) => {
        scrollProgress = self.progress;

        const maxIdx = SECTION_TRANSFORMS.length - 1;
        const scaled = scrollProgress * maxIdx;
        const idx = Math.min(Math.floor(scaled), maxIdx - 1);
        const t = scaled - idx;

        const cur = SECTION_TRANSFORMS[idx];
        const nxt = SECTION_TRANSFORMS[Math.min(idx + 1, maxIdx)];

        const mult = getScreenMultiplier();

        // Dynamically compute responsive model position
        const curX = cur.modelPos[0] * mult.posX;
        const nxtX = nxt.modelPos[0] * mult.posX;

        targetModelPos.set(
          lerp(curX, nxtX, t),
          lerp(cur.modelPos[1], nxt.modelPos[1], t),
          lerp(cur.modelPos[2] + mult.posZ, nxt.modelPos[2] + mult.posZ, t)
        );

        targetModelRotY = lerp(cur.modelRotY, nxt.modelRotY, t);

        targetCamPos.set(
          lerp(cur.camPos[0], nxt.camPos[0], t),
          lerp(cur.camPos[1], nxt.camPos[1], t),
          lerp(cur.camPos[2], nxt.camPos[2], t)
        );

        targetLookAt.set(
          lerp(cur.lookAt[0], nxt.lookAt[0], t),
          lerp(cur.lookAt[1], nxt.lookAt[1], t),
          lerp(cur.lookAt[2], nxt.lookAt[2], t)
        );

        const activeBeat = t < 0.5 ? cur : nxt;
        const activeIdx = t < 0.5 ? idx : Math.min(idx + 1, maxIdx);

        // IMPROVEMENT 4: Trigger section transition flash on pose/section change
        if (activeIdx !== activeSectionIdxRef.current) {
          activeSectionIdxRef.current = activeIdx;
          const hexStr = "#" + activeBeat.accent.toString(16).padStart(6, "0");
          setFlashColor(hexStr);
          setTimeout(() => setFlashColor(null), 300);
        }

        transitionToClip(activeBeat.clip);
        rimTarget.setHex(activeBeat.accent);
      },
    });

    // BUG 2 FIX: Force immediate scroll evaluation right after mounting pageST
    pageST.update();

    // Render Loop
    const clock = new THREE.Clock();
    let animFrameId: number;

    function renderLoop() {
      animFrameId = requestAnimationFrame(renderLoop);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (mixer) {
        mixer.update(delta);
      }

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Model Lerping & Responsive Position updates
      currentModelPos.lerp(targetModelPos, 0.05);
      currentModelRotY = lerp(currentModelRotY, targetModelRotY, 0.05);

      if (modelRoot) {
        const mult = getScreenMultiplier();
        modelRoot.scale.setScalar(mult.scale);

        // Subtle dynamic floating motion (Y sine wave)
        const floatY = Math.sin(elapsedTime * 1.8) * 0.03;
        modelRoot.position.set(
          currentModelPos.x,
          currentModelPos.y + floatY,
          currentModelPos.z
        );

        // Responsive rotation + subtle mouse turn towards cursor
        modelRoot.rotation.y = currentModelRotY + mouseX * 0.35;

        // Move floor reflection disc & ring along with model
        floor.position.x = currentModelPos.x;
        floor.position.z = currentModelPos.z;
        floorRing.position.x = currentModelPos.x;
        floorRing.position.z = currentModelPos.z;

        // Sync Workstation (Desk + Keyboard) position & rotation with avatar
        workstationGroup.position.set(
          currentModelPos.x,
          currentModelPos.y + floatY,
          currentModelPos.z
        );
        workstationGroup.rotation.y = modelRoot.rotation.y;
      }

      // Show Workstation ONLY when typing mode is active
      const isTypingActive = currentClip === "typing";
      workstationGroup.visible = isTypingActive;

      // Camera Lerp
      currentCamPos.lerp(targetCamPos, 0.06);
      currentLookAt.lerp(targetLookAt, 0.06);

      camera.position.x = currentCamPos.x + mouseX;
      camera.position.y = currentCamPos.y - mouseY;
      camera.position.z = currentCamPos.z;

      camera.lookAt(
        currentLookAt.x + mouseX * 0.5,
        currentLookAt.y - mouseY * 0.5,
        currentLookAt.z
      );

      // Light color updates
      rimColor.lerp(rimTarget, 0.05);
      rimLight.color.copy(rimColor);
      ringMat.color.copy(rimColor);

      // Starfield subtle rotation & pulse
      starPoints.rotation.y += 0.0003;
      starMat.opacity = 0.4 + Math.sin(elapsedTime * 1.5) * 0.15;

      renderer.render(scene, camera);
    }
    renderLoop();

    // Window Resize Handler
    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      isUnmounted = true;
      cancelAnimationFrame(animFrameId);
      cancelAnimationFrame(lerpAnimId);
      clearTimeout(progressTimer);
      clearTimeout(fadeTimer);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      pageST.kill();

      renderer.dispose();
      starGeo.dispose();
      starMat.dispose();
      floorGeo.dispose();
      floorMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      deskGeo.dispose();
      deskMat.dispose();
      legGeo.dispose();
      legMat.dispose();
      kbChassisGeo.dispose();
      kbChassisMat.dispose();
      keyGeo.dispose();
      keyMat.dispose();

      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          if (Array.isArray(mesh.material)) mesh.material.forEach((m) => m.dispose());
          else mesh.material.dispose();
        }
      });
    };
  }, []);

  const currentPct = Math.round(displayedProgress);

  return (
    <>
      {/* BUG 4: Master Fixed 3D Canvas with z-0 container */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* IMPROVEMENT 4: Section Transition Cinematic Color Flash Overlay */}
      {flashColor && (
        <div
          className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 ease-out"
          style={{
            backgroundColor: flashColor,
            opacity: 0.15,
          }}
        />
      )}

      {/* BUG 1: Smooth Lerp Loading Overlay with 400ms Pause & 0.6s Fade Out */}
      {!isLoaded && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink text-ivory transition-opacity duration-600 ease-out ${
            isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="relative flex items-center justify-center">
            <div className="h-20 w-20 rounded-full border-2 border-line border-t-accent-purple animate-spin" />
            <Move3d className="absolute h-8 w-8 text-accent-purple animate-pulse" />
          </div>

          <p className="mt-6 font-mono text-sm tracking-wider text-accent-cyan animate-pulse">
            {getStageMessage(currentPct)}
          </p>

          <p className="mt-2 font-mono text-xs text-muted">
            {currentPct}%
          </p>

          <div className="mt-4 h-1.5 w-56 overflow-hidden rounded-full bg-panel border border-line">
            <div
              className="h-full bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-emerald transition-all duration-150 ease-out"
              style={{ width: `${currentPct}%` }}
            />
          </div>
        </div>
      )}
    </>
  );
}


# โครงสร้างโปรเจกต์ (Project Structure)

โปรเจกต์นี้พัฒนาด้วย **React 19**, **Vite**, **Tailwind CSS v4** และใช้ **TanStack Router** จัดการเส้นทาง (Routing) โดยมี **Biome** สำหรับ Linting/Formatting และใช้ **Bun** เป็น Package Manager

## โครงสร้างโฟลเดอร์หลัก

```text
ai-chat-webapp-tsr/
├── promps/                # เก็บไฟล์คู่มือ/ข้อกำหนด และ Prompt สำหรับ AI (เช่น CODING_STANDART.md, UI_THEME.md)
├── public/                # ไฟล์ Static Assets ที่ไม่ต้องผ่านกระบวนการ Build (เช่น รูปภาพ, favicon)
├── src/                   # โค้ดหลักและลอจิกทั้งหมดของแอปพลิเคชัน
│   ├── components/        # ชุด UI Components ที่ถูกเรียกใช้งานซ้ำทั่วทั้งโปรเจกต์ (Shared Components)
│   ├── features/          # จัดการโครงสร้างแบบ Feature-Based แบ่งตามโดเมน/โมดูล (เช่น auth, chat, profile)
│   ├── hooks/             # Custom React Hooks ที่ใช้ร่วมกันแบบ Global
│   ├── lib/               # ไฟล์ตั้งค่า Library ภายนอก หรือ Wrapper ชั้นนอก (เช่น Axios config, UI library wrappers)
│   ├── routes/            # โฟลเดอร์สำหรับทำ File-Based Routing ของ TanStack Router
│   ├── service/           # ฟังก์ชันสำหรับเชื่อมต่อ API / ดึงข้อมูลแบบแยกส่วน
│   ├── stores/            # จัดการ Global State ของแอปพลิเคชัน (เช่น Zustand หรือ Context API)
│   ├── types/             # ไฟล์ประกาศ TypeScript Interfaces และ Types ระดับ Global
│   ├── utils/             # ฟังก์ชันช่วยเหลือ (Helper/Utility functions) ทั่วไปที่ใช้ซ้ำได้
│   ├── main.tsx           # Entry point หลักในการจุดประกายแอป React
│   ├── router.tsx         # โค้ดตั้งค่าและสร้าง instance เพื่อใช้งาน TanStack Router
│   ├── routeTree.gen.ts   # ไฟล์แผนผัง Route ที่ TanStack สร้างขึ้นมาอัตโนมัติ (ห้ามแก้ด้วยมือ)
│   └── styles.css         # ไฟล์ CSS หลัก และจุดนำเข้าของ Tailwind CSS directives
├── biome.json             # การตั้งค่า Formatter และ Linter (Biome)
├── bun.lock               # ไฟล์ล็อกเวอร์ชันของแพ็กเกจจาก Bun
├── package.json           # การตั้งค่า Dependencies และ Scripts ของโปรเจกต์ (เช่น dev, build, lint)
├── tsconfig.json          # การตั้งค่าตัวแปลผล TypeScript (Compiler Options)
├── vite.config.ts         # การตั้งค่า Vite bundler พร้อม Plugins ต่างๆ (เช่น Tailwind, TanStack Router)
└── README.md              # เอกสารอธิบายวิธีเริ่มต้นใช้งานและการรันโปรเจกต์
```

## คำอธิบายสถาปัตยกรรม (Architecture & Design Pattern)

1. **Feature-Based Architecture (Feature-Sliced Design)**
   โปรเจกต์นี้แยกโค้ดออกเป็นส่วนๆ ตามสโคปการทำงานไว้ในโฟลเดอร์ `src/features/` เช่น โฟลเดอร์ `auth`, `chat`, `profile` ทำให้โค้ดที่เกี่ยวข้องทำงานแยกจากกันอย่างชัดเจน (Decoupled) แต่ละโฟลเดอร์ใน `features` มักจะมี components, api, types ภายในเป็นของตัวเอง ทำให้โปรเจกต์บำรุงรักษาและขยายขนาดได้ง่าย

2. **File-Based Routing (TanStack Router)**
   โครงสร้างเส้นทางหน้าเว็บ (Routes) จะจัดการผ่านโฟลเดอร์ `src/routes/` ซึ่ง TanStack Router plugin ตัวจับการสร้างไฟล์ในนี้และจะอัปเดตไฟล์ `src/routeTree.gen.ts` โดยอัตโนมัติ

3. **Styling Strategy (Tailwind CSS v4)**
   ใช้ **Tailwind CSS** ในการจัดการหน้าตาทั้งหมด โดยมีข้อกำหนดเรื่องดีไซน์และการใช้สีที่อ้างอิงจากโฟลเดอร์ `promps/UI_THEME.md` เป็นหลัก เพื่อให้เอกลักษณ์ของแอปพลิเคชันเป็นไปในทิศทางเดียวกัน

4. **Tools & Tooling (เครื่องมือที่นำมาใช้)**
   - ใช้ **Biome** แทน ESLint + Prettier เพื่อความเร็วและมาตรฐานแบบ All-in-one
   - ใช้ระบบจัดการแพ็กเกจด้วย **Bun** (`bun install`, `bun run dev`) แทน npm หรือ yarn เพื่อความรวดเร็วในการคอมไพล์และแคชแพ็กเกจ
   - ใช้ **Vitest** สำหรับรองรับการกระทำ Unit Tests

เอกสารฉบับนี้จัดทำขึ้นเพื่อให้ทีมพัฒนาหรือ AI Assistant สามารถวิเคราะห์โครงสร้าง เข้าใจขอบเขตของโฟลเดอร์ต่างๆ และสามารถวางไฟล์ใหม่ได้ถูกตำแหน่งเมื่อต้องต่อยอดฟีเจอร์เพิ่มเติม

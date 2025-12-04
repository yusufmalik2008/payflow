### `README.md`

```markdown
# Order & Payment System  
**Sistem Order dan Pembayaran**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![NestJS](https://img.shields.io/badge/NestJS-v10-red)](https://nestjs.com/)
[![Next.js](https://img.shields.io/badge/Next.js-16-blue)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-Latest-brightgreen)](https://www.prisma.io/)

A modern full-stack application for managing orders and payments using **microservices architecture** with NATS, built with **NestJS** (backend), **Next.js 16** (App Router + Turbopack), **Prisma ORM**, **shadcn/ui**, **Tailwind CSS**, and **TypeScript**.

Sistem full-stack modern untuk mengelola order dan pembayaran menggunakan **arsitektur microservices** dengan NATS, dibangun menggunakan **NestJS** (backend), **Next.js 16** (App Router + Turbopack), **Prisma ORM**, **shadcn/ui**, **Tailwind CSS**, dan **TypeScript**.

## 🚀 Tech Stack / Teknologi yang Digunakan

| Layer           | Technology                          |
|-----------------|-------------------------------------|
| Frontend        | Next.js 16 (App Router), TypeScript, Tailwind CSS, shadcn/ui |
| Backend         | NestJS 10+, TypeScript, Prisma      |
| Messaging       | NATS (microservice communication)  |
| Database        | PostgreSQL (via Prisma)             |
| Package Manager | npm / pnpm / yarn                   |

## 📦 Project Structure / Struktur Proyek

```
order-payment-project/
├── backend/          # NestJS + Prisma + NATS microservice
├── frontend/         # Next.js 16 + shadcn/ui + Tailwind
└── docker-compose.yml (optional)
```

## ⚡ Quick Start / Mulai Cepat

### Prerequisites / Persyaratan
- Node.js ≥ 18
- PostgreSQL running
- NATS Server running on port `4222`

### 1. Start NATS Server (Wajib!)
```bash
# Using Docker (recommended)
docker run -d --name nats -p 4222:4222 nats:latest

# Or download & run directly
nats-server -p 4222
```

> **JANGAN LUPA jalankan NATS di port 4222 sebelum menjalankan backend!**

### 2. Setup Backend
```bash
cd backend
cp .env.example .env    # Edit database URL & other vars
npm install
npx prisma generate
npx prisma migrate dev  # or migrate deploy in production
npm run start:dev       # or "nest start"
```
→ Backend berjalan di **http://localhost:3001**

### 3. Setup Frontend
```bash
cd frontend
cp .env.example .env.local   # Set NEXT_PUBLIC_API_URL=http://localhost:3001
npm install
npm run dev
```
→ Frontend berjalan di **http://localhost:3000**

## 🏃 Running the Project / Menjalankan Proyek

| Service     | Command                  | URL                        |
|-------------|--------------------------|----------------------------|
| NATS        | `nats-server` or Docker  | nats://localhost:4222      |
| Backend     | `nest start` or `npm run start:dev` | http://localhost:3001 |
| Frontend    | `npm run dev`            | http://localhost:3000      |

## 📝 Environment Variables / Variabel Lingkungan

### Backend (.env)
```env
DATABASE_URL="postgresql://user:pass@localhost:5432/orderdb"
NATS_URL="nats://localhost:4222"
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🤝 Contributing / Berkontribusi

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

Lihat [CONTRIBUTING.md](CONTRIBUTING.md) untuk detail kontribusi.

## 📄 License / Lisensi

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Proyek ini dilisensikan di bawah Lisensi MIT - lihat berkas [LICENSE](LICENSE) untuk detail.

---

**Terima kasih telah menggunakan atau berkontribusi pada proyek ini!**  
**Thank you for using or contributing to this project!** 🌟
```

---


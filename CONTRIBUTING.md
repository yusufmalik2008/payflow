```markdown
# 🤝 Contributing Guidelines / Panduan Berkontribusi

Terima kasih atas minat Anda untuk berkontribusi!  
Thank you for your interest in contributing!

## 🚨 Important Notes / Catatan Penting

**JANGAN LUPA untuk selalu menjalankan NATS server terlebih dahulu di port 4222!**  
Tanpa NATS, backend akan error saat startup.

```bash
# Paling mudah pakai Docker
docker run -d --name nats-main -p 4222:4222 nats:latest

# Atau jalankan manual
nats-server -p 4222
```

## 📋 Development Workflow / Alur Pengembangan

1. **Fork** repository ini
2. **Clone** fork Anda:
   ```bash
   git clone https://github.com/<your-username>/order-payment-project.git
   cd order-payment-project
   ```
3. Buat branch baru:
   ```bash
   git checkout -b feature/nama-fitur-anda
   # atau
   git checkout -b fix/nama-perbaikan
   ```
4. Install dependencies di kedua folder:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
5. Jalankan NATS → Backend → Frontend (lihat README.md)
6. Lakukan perubahan, pastikan kode tetap **Type-Safe** dan **formatted**
7. Commit dengan pesan yang jelas (Conventional Commits direkomendasikan):
   ```bash
   git commit -m "feat: tambah fitur checkout pembayaran"
   git commit -m "fix: perbaiki error NATS connection"
   ```
8. Push dan buka **Pull Request** ke branch `main`

## 🛠️ Coding Standards / Standar Pengkodean

- Gunakan **TypeScript** secara ketat (no `any`)
- Format kode dengan Prettier (sudah ada config)
- Backend: ikuti struktur NestJS (controllers, services, DTOs)
- Frontend: gunakan komponen dari `components/ui` (shadcn/ui)
- Tambahkan validasi DTO di backend dengan `class-validator`

## 🧪 Testing

Jalankan test (jika ada) sebelum PR:

```bash
# Backend
cd backend
npm run test

# Frontend
cd frontend
npm run test
```

## ❓ Ada Pertanyaan?

Buka **Issue** baru atau tanya di Discussion.

We speak English & Bahasa Indonesia here!  
Kami menerima pertanyaan dalam Bahasa Indonesia dan Inggris!

Terima kasih banyak atas kontribusinya! 🙌  
Thank you so much for your contribution!
```

Just create these two files in the root of your project:

```
order-payment-project/
├── README.md
├── CONTRIBUTING.md
├── backend/
└── frontend/
```

Your repository will look very professional and clear, especially for Indonesian and international contributors.

If you want me to add Docker Compose, GitHub Actions, or a LICENSE file too, just let me know! 🚀

Saya akan (1) membuat SSH key ed25519 tanpa passphrase, (2) menampilkan public key untuk Anda salin ke GitHub, dan (3) mengganti remote origin ke SSH URL. Setelah itu saya akan menunggu konfirmasi bahwa Anda sudah menempelkan public key ke GitHub sebelum mencoba push.

1. Private key file: %USERPROFILE%.ssh\\id_ed25519 — simpan/backup di tempat aman. Jangan bagikan isinya.
2. Jika Anda memakai passphrase saat pembuatan, ingat passphrase tersebut.
3. Public key boleh dibagikan (hanya untuk menempel di layanan seperti GitHub).

di CMD tulis : type "%USERPROFILE%\.ssh\id_ed25519.pub"
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIK4oLw5nOGz8Y5HtayOyxbJhV3SLW6JN3Mit0OMAJd9z qadriaditya6@gmail.com

import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <h2 className="text-2xl font-bold">404 - Not Found</h2>
      <p className="mt-2 text-slate-600">Halaman tidak ditemukan.</p>
      <Link href="/" className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg">
        Kembali ke Beranda
      </Link>
    </div>
  );
}


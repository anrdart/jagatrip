export const SITE = {
  url:         'https://jagatrip.com',
  name:        'JAGATRIP',
  legalName:   'PT JAGATRIP MITRA EDUKASI',
  tagline:     'Buka Jendela Dunia untuk Generasi Indonesia',
  subTagline:  'Ekspedisi Benchmarking Internasional · Edu-Tourism Premium',
  description: 'Program Edu-Tourism premium untuk praktisi pendidikan Indonesia. Benchmarking sekolah-sekolah terbaik dunia: kepala sekolah, guru, pengawas, pemilik yayasan.',
  waNumber:    '6285643972139',
  waDisplay:   '085643972139',
  email:       'alfatihahtourtravel@alfatihah.com',
  operator:    'Alfatihah Tour & Travel',
  locale:      'id-ID',
  lang:        'id',
  location:    'Jakarta, Indonesia',
  foundingYear: 2026,
} as const;

export const WA_URL = `https://wa.me/${SITE.waNumber}`;

export function waLink(tripName?: string, tripDate?: string): string {
  let msg = 'Halo, saya tertarik dengan program JAGATRIP Insider Series 2026';
  if (tripName) msg += ` — ${tripName}`;
  if (tripDate) msg += ` (${tripDate})`;
  msg += '. Bisa info lebih lanjut?';
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(msg)}`;
}

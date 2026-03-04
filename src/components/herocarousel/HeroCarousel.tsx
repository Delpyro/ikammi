import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Title, Text, } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import '@mantine/carousel/styles.css'; // Wajib di-import agar carousel tidak berantakan
import classes from './HeroCarousel.module.css';

const slidesData = [
  {
    // Foto Ilustrasi: Bisa diganti foto mubes/kumpul angkatan
    image: '/asset/IMG_9541.jpg',    
    subtitle: 'Membangun Karakter, Merawat Tradisi',
    title: 'Duduak Samo Randah',
    description: 'Kito basatu pado wadah IKAMMI Unsoed. Tagak samo tinggi, saling mandukuang, manjago silaturahmi, dan bakambang basamo di bidang akademik maupun kakarabatan antar mahasiswa.',
  },
  {
    // Foto Ilustrasi: Bisa diganti foto perform Tari Piring / Suntiang
    image: '/asset/galeri/bukber.jpeg', // Ilustrasi Rumah Gadang/Pemandangan Alam
    subtitle: 'Warisan Budaya Luhur',
    title: 'Adaik Basandi Syarak',
    description: 'Panggung untuak malestarikan kekayaan seni Minangkabau di lingkungan kampus dan masyarakaik laweh. Takang urat untuak mandaki, takang mato untuak mancaliak.',
  },
  {
    // Foto Ilustrasi: Bisa diganti foto baksos / Jam Gadang / Ngarai Sianok
    image: '/asset/galeri/bounding.jpeg', // Ilustrasi Pemandangan Senja Sumatera Barat
    subtitle: 'Mengabdi Tanpa Batas',
    title: 'Marantau Manggali Ilimu',
    description: 'Mambaok sumangaik urang awak untuak taruih barinovasi dan maagiah kontribusi rancak bagi almamater Unsoed dan banso. Sarantau sasasaran, sahino sapaluangan.',
  },
];

export function HeroCarousel() {
  // Setup Autoplay (geser otomatis tiap 5 detik)
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const slides = slidesData.map((item, index) => (
    <Carousel.Slide key={index}>
      <div className={classes.slide} style={{ backgroundImage: `url(${item.image})` }}>
        <div className={classes.overlay} />
        
        <div className={classes.content}>
          <Text className={classes.subtitle}>{item.subtitle}</Text>
          <Title className={classes.title}>{item.title}</Title>
          <Text size="lg" mt="md" c="gray.3" style={{ lineHeight: 1.6 }}>
            {item.description}
          </Text>

          {/* <Group justify="center" mt={40}>
            <Button size="lg" color="red" radius="md">
              Gabung Sekarang
            </Button>
            <Button size="lg" variant="white" color="dark" radius="md">
              Lihat Agenda
            </Button>
          </Group> */}
        </div>
      </div>
    </Carousel.Slide>
  ));

return (
    <Carousel
      withIndicators 
      withControls
      emblaOptions={{ loop: true }}
      height="85vh"
      plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
      styles={{
        indicator: {
          width: 30, // Lebar garis
          height: 6, // Ketebalan garis
          borderRadius: 10, // Membuat ujung garis membulat
          backgroundColor: 'rgba(255, 255, 255, 0.4)', // Warna putih transparan saat tidak aktif
          transition: 'all 250ms ease',
          '&[data-active]': {
            width: 45, // Garis lebih panjang saat aktif
            backgroundColor: '#D0021B', // Warna Merah IKAMMI saat aktif
          },
        },
        
        // 2. Styling untuk Tombol Panah Kiri-Kanan
        control: {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: '#fff',
          border: 'none',
          backdropFilter: 'blur(4px)',
          width: 50,
          height: 50,
          transition: 'background-color 200ms ease',
          '&:hover': {
            backgroundColor: 'rgba(208, 2, 27, 0.8)',
          },
        },
      }}
    >
      {slides}
    </Carousel>
  );
}
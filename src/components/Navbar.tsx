import { useEffect } from 'react';
import { Container, Group, Burger, Transition, Paper, Text, Button } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom'; // Import react-router-dom
import classes from './Navbar.module.css';

// Update link menggunakan format routing
const links = [
  { link: '/', label: 'Beranda' },
  { link: '/#profil', label: 'Profil' },
  { link: '/#pengurus', label: 'Pengurus' },
  { link: '/galeri', label: 'Galeri' },
  { link: '/#kontak', label: 'Tanyo ciek' },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  
  // Hook untuk deteksi halaman saat ini
  const location = useLocation();
  
  // Hook untuk deteksi scroll
  const [scroll] = useWindowScroll();
  const isScrolled = scroll.y > 50;

  // Efek ini digunakan untuk memaksa browser scroll ke section tertentu 
  // ketika mengklik link ber-hash (misal: /#pengurus) terutama saat dari halaman Galeri
  // Efek ini mengontrol posisi scroll setiap kali URL berubah
  useEffect(() => {
    if (location.hash) {
      // Jika ada hash (misal: /#pengurus), scroll ke section tersebut
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // PERUBAHAN DI SINI:
      // Jika tidak ada hash (berarti pindah ke halaman /galeri atau / biasa), 
      // paksa halaman untuk selalu mulai dari paling atas
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); // 'smooth' atau 'instant'
    }
  }, [location]);

  // Gabungkan pathname dan hash untuk mengecek link mana yang sedang aktif
  const currentActive = location.pathname + location.hash;

  const items = links.map((link) => {
    // Logika untuk menentukan tombol menu mana yang menyala (aktif)
    const isActive = 
      currentActive === link.link || 
      (currentActive === '/' && link.link === '/'); // Aktifkan Beranda jika URL hanya '/'

    return (
      <Link // Ganti tag <a> menjadi <Link>
        key={link.label}
        to={link.link} // Ganti href menjadi to
        className={classes.link}
        data-active={isActive || undefined}
        onClick={close} // Tutup menu mobile otomatis saat diklik
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className={`${classes.header} ${isScrolled ? classes.headerScrolled : ''}`}>
      <Container size="md" h="100%" display="flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* LOGO IKAMMI */}
        <Group>
          <Text fw={900} size="xl" className={classes.logoText} style={{ letterSpacing: -1 }}>
            IKAMMI <span className={classes.logoTextSpan}>UNSOED</span>
          </Text>
        </Group>

        {/* MENU DESKTOP */}
        <Group gap={5} visibleFrom="md">
          {items}
        </Group>

        {/* TOMBOL & BURGER MOBILE */}
        {/* TOMBOL & BURGER MOBILE */}
        <Group>
          <Button 
            radius="xl" 
            color="red.7" 
            variant="filled" /* BERUBAH: Selalu gunakan 'filled' agar tombol terlihat di background putih */
            visibleFrom="sm"
          >
            Gabuang lai
          </Button>
          
          <Burger 
            opened={opened} 
            onClick={toggle} 
            hiddenFrom="md" 
            size="sm" 
            color="#000" /* BERUBAH: Selalu gunakan hitam (#000) agar terlihat di background putih */
          />
        </Group>

        {/* MENU MOBILE (DROPDOWN) */}
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper
              withBorder
              style={{ ...styles, position: 'absolute', top: 70, left: 0, right: 0, zIndex: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
              hiddenFrom="md"
              p="md"
              shadow="md"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {items}
                <Button fullWidth color="red.7" mt="md" radius="md">Gabuang lai</Button>
              </div>
            </Paper>
          )}
        </Transition>
      </Container>
    </header>
  );
}
import { Container, Grid, Text, Group, ActionIcon, Stack, ThemeIcon } from '@mantine/core';
import { IconBrandInstagram, IconBrandTiktok, IconBrandYoutube, IconMapPin, IconPhone, IconMail } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import classes from './Footer.module.css';

// Data menu dipecah jadi 2 agar grid lebih seimbang
const quickLinks = [
  { link: '#home', label: 'Beranda' },
  { link: '#sejarah', label: 'Sejarah IKAMMI' },
  { link: '#pengurus', label: 'Struktur Pengurus' },
  { link: '#galeri', label: 'Galeri Kegiatan' },
];

const infoLinks = [
  { link: '#info-maba', label: 'Pojok Perantau' },
  { link: '#proker', label: 'Program Kerja' },
  { link: '#faq', label: 'Tanya Jawab (FAQ)' },
  { link: '#gabung', label: 'Pendaftaran' },
];

export function Footer() {
  // Konfigurasi animasi Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <footer className={classes.footer} id="kontak">
      <Container size="lg">
        {/* Wrapper animasi Framer Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid gutter={50}>
            {/* KOLOM 1: Brand & Deskripsi (Span 4) */}
            <Grid.Col span={{ base: 12, md: 4 }} component={motion.div} variants={itemVariants}>
              <Text className={classes.logo}>
                IKAMMI <span className={classes.logoHighlight}>UNSOED</span>
              </Text>
              <Text className={classes.description} size="sm">
                Wadah kekeluargaan mahasiswa Minangkabau di Universitas Jenderal Soedirman. Patah tumbuah hilang baganti, takang urat untuak mandaki.
              </Text>
            </Grid.Col>

            {/* KOLOM 2: Tautan Cepat (Span 2) */}
            <Grid.Col span={{ base: 6, sm: 4, md: 2 }} component={motion.div} variants={itemVariants}>
              <Text className={classes.title}>Tautan Cepat</Text>
              <Stack gap={0}>
                {quickLinks.map((item) => (
                  <a key={item.label} href={item.link} className={classes.link}>
                    {item.label}
                  </a>
                ))}
              </Stack>
            </Grid.Col>

            {/* KOLOM 3: Informasi Tambahan (Span 2) */}
            <Grid.Col span={{ base: 6, sm: 4, md: 2 }} component={motion.div} variants={itemVariants}>
              <Text className={classes.title}>Informasi</Text>
              <Stack gap={0}>
                {infoLinks.map((item) => (
                  <a key={item.label} href={item.link} className={classes.link}>
                    {item.label}
                  </a>
                ))}
              </Stack>
            </Grid.Col>

            {/* KOLOM 4: Kontak & Alamat (Span 4) */}
            <Grid.Col span={{ base: 12, sm: 4, md: 4 }} component={motion.div} variants={itemVariants}>
              <Text className={classes.title}>Hubungi Kami</Text>
              
              <Group wrap="nowrap" align="flex-start" mb="sm" className={classes.contactItem}>
                <ThemeIcon size="md" variant="light" color="red" radius="xl">
                  <IconMapPin size={18} stroke={1.5} />
                </ThemeIcon>
                <Text size="sm" c="dimmed">
                  Sekretariat IKAMMI Unsoed, Jl. HR Bunyamin, Purwokerto Utara, Banyumas
                </Text>
              </Group>
              
              <Group wrap="nowrap" align="center" mb="sm" className={classes.contactItem}>
                <ThemeIcon size="md" variant="light" color="red" radius="xl">
                  <IconPhone size={18} stroke={1.5} />
                </ThemeIcon>
                <Text size="sm" c="dimmed">+62 812-3456-7890 (Humas)</Text>
              </Group>
              
              <Group wrap="nowrap" align="center" className={classes.contactItem}>
                <ThemeIcon size="md" variant="light" color="red" radius="xl">
                  <IconMail size={18} stroke={1.5} />
                </ThemeIcon>
                <Text size="sm" c="dimmed">ikammi.unsoed@gmail.com</Text>
              </Group>
            </Grid.Col>
          </Grid>

          {/* BOTTOM AREA: Copyright & Social Media */}
          <motion.div className={classes.bottomArea} variants={itemVariants}>
            <Text c="dimmed" size="sm" ta={{ base: 'center', md: 'left' }}>
              © {new Date().getFullYear()} IKAMMI Unsoed. Dibuat dengan bangga oleh Urang Awak.
            </Text>
            
            <Group gap="sm" justify="center" mt={{ base: 'md', md: 0 }}>
              <ActionIcon size="lg" color="gray" variant="filled" radius="xl" className={classes.socialIcon} component="a" href="https://instagram.com/" target="_blank">
                <IconBrandInstagram size={20} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="filled" radius="xl" className={classes.socialIcon} component="a" href="https://tiktok.com/" target="_blank">
                <IconBrandTiktok size={20} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="filled" radius="xl" className={classes.socialIcon} component="a" href="https://youtube.com/" target="_blank">
                <IconBrandYoutube size={20} stroke={1.5} />
              </ActionIcon>
            </Group>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  );
}
import { Container, Grid, Text, Group, ActionIcon, Stack } from '@mantine/core';
import { IconBrandInstagram, IconBrandTiktok, IconBrandYoutube, IconMapPin, IconPhone, IconMail } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import classes from './Footer.module.css';

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  // Animasi lebih halus dengan custom ease ala website agensi Eropa
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number] // ✅ Tambahkan ini
      } 
    },
  };

  return (
    <footer className={classes.footer} id="kontak">
      <Container size="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid gutter={{ base: 40, md: 60 }}>
            {/* KOLOM 1: Brand & Deskripsi */}
            <Grid.Col span={{ base: 12, md: 4 }}>
              <motion.div variants={itemVariants}>
                <Text className={classes.logo}>
                  IKAMMI<span className={classes.logoHighlight}>.</span>UNSOED
                </Text>
                <Text className={classes.description}>
                  Wadah kekeluargaan mahasiswa Minangkabau di Universitas Jenderal Soedirman. Patah tumbuah hilang baganti, takang urat untuak mandaki.
                </Text>
              </motion.div>
            </Grid.Col>

            {/* KOLOM 2: Tautan Cepat */}
            <Grid.Col span={{ base: 6, sm: 4, md: 2 }}>
              <motion.div variants={itemVariants}>
                <Text className={classes.title}>Tautan Cepat</Text>
                <Stack gap="sm">
                  {quickLinks.map((item) => (
                    <a key={item.label} href={item.link} className={classes.link}>
                      {item.label}
                    </a>
                  ))}
                </Stack>
              </motion.div>
            </Grid.Col>

            {/* KOLOM 3: Informasi Tambahan */}
            <Grid.Col span={{ base: 6, sm: 4, md: 2 }}>
              <motion.div variants={itemVariants}>
                <Text className={classes.title}>Informasi</Text>
                <Stack gap="sm">
                  {infoLinks.map((item) => (
                    <a key={item.label} href={item.link} className={classes.link}>
                      {item.label}
                    </a>
                  ))}
                </Stack>
              </motion.div>
            </Grid.Col>

            {/* KOLOM 4: Kontak & Alamat */}
            <Grid.Col span={{ base: 12, sm: 4, md: 4 }}>
              <motion.div variants={itemVariants}>
                <Text className={classes.title}>Hubungi Kami</Text>
                
                <Group wrap="nowrap" align="flex-start" mb="md" className={classes.contactItem}>
                  <IconMapPin size={20} stroke={1.2} className={classes.contactIcon} />
                  <Text size="sm" className={classes.contactText}>
                    Sekretariat IKAMMI Unsoed<br/>
                    Jl. HR Bunyamin, Purwokerto Utara
                  </Text>
                </Group>
                
                <Group wrap="nowrap" align="center" mb="md" className={classes.contactItem}>
                  <IconPhone size={20} stroke={1.2} className={classes.contactIcon} />
                  <Text size="sm" className={classes.contactText}>+62 812-3456-7890</Text>
                </Group>
                
                <Group wrap="nowrap" align="center" className={classes.contactItem}>
                  <IconMail size={20} stroke={1.2} className={classes.contactIcon} />
                  <Text size="sm" className={classes.contactText}>ikammi.unsoed@gmail.com</Text>
                </Group>
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* BOTTOM AREA */}
          <motion.div className={classes.bottomArea} variants={itemVariants}>
            <Text className={classes.copyright} ta={{ base: 'center', md: 'left' }}>
              © {new Date().getFullYear()} IKAMMI UNSOED. DIBUAT DENGAN BANGGA OLEH URANG AWAK.
            </Text>
            
            <Group gap="md" justify="center" mt={{ base: 'xl', md: 0 }}>
              <ActionIcon size="lg" radius="xl" className={classes.socialIcon} component="a" href="https://instagram.com/" target="_blank">
                <IconBrandInstagram size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" radius="xl" className={classes.socialIcon} component="a" href="https://tiktok.com/" target="_blank">
                <IconBrandTiktok size={18} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" radius="xl" className={classes.socialIcon} component="a" href="https://youtube.com/" target="_blank">
                <IconBrandYoutube size={18} stroke={1.5} />
              </ActionIcon>
            </Group>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  );
}  
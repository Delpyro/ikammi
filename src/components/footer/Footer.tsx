import { Container, Grid, Text, Group, ActionIcon, Stack } from '@mantine/core';
import { IconBrandInstagram, IconBrandTiktok, IconBrandYoutube, IconMapPin, IconPhone, IconMail } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const quickLinks = [
  { link: '/', label: 'Beranda' },
  { link: '/#sejarah', label: 'Sejarah IKAMMI' },
  { link: '/#pengurus', label: 'Struktur Pengurus' },
  { link: '/galeri', label: 'Galeri Kegiatan' },
];

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
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
          <Grid gutter={{ base: 40, md: 60 }} justify="space-between">
            {/* KOLOM 1: Brand & Deskripsi */}
            <Grid.Col span={{ base: 12, md: 5 }}>
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
            <Grid.Col span={{ base: 12, sm: 5, md: 3 }}>
              <motion.div variants={itemVariants}>
                <Text className={classes.title}>Tautan Cepat</Text>
                <Stack gap="sm">
                  {quickLinks.map((item) => (
                    <Link key={item.label} to={item.link} className={classes.link}>
                      {item.label}
                    </Link>
                  ))}
                </Stack>
              </motion.div>
            </Grid.Col>

            {/* KOLOM 3: Kontak & Alamat */}
            <Grid.Col span={{ base: 12, sm: 7, md: 4 }}>
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
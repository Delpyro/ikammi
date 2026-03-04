import { useState, useMemo } from 'react';
import { Container, Title, Text, Button, Box } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import Lightbox from "yet-another-react-lightbox";
import { motion } from 'framer-motion';
import classes from './Galeri.module.css';
import "yet-another-react-lightbox/styles.css";
import { useNavigate } from 'react-router-dom';

interface GaleriItem {
  id: number;
  title: string;
  img: string;
  className?: string;
}

const GALERI_DATA: GaleriItem[] = [
  { id: 1, title: 'Idul Fitri', img: '/asset/galeri/idul fitri3.JPG', className: classes.itemLarge },
  { id: 2, title: 'Baturaden', img: '/asset/galeri/baturaden.jpeg', className: classes.itemWide },
  { id: 3, title: 'Tari Piring', img: '/asset/galeri/nari piring.jpeg' },
  { id: 4, title: 'Buka Bersama 2025', img: '/asset/galeri/bukber2025.jpeg', className: classes.itemTall },
  { id: 5, title: 'Pulang Basamo', img: '/asset/galeri/pulang basamo.jpeg' },
  { id: 6, title: 'Main Basamo', img: '/asset/galeri/main basamo.jpeg', className: classes.itemWide },
  { id: 7, title: 'Main Koa', img: '/asset/galeri/bakoa.jpeg' },
  { id: 8, title: 'Curug', img: '/asset/galeri/curug2.jpeg' },
  { id: 9, title: 'Bounding', img: '/asset/galeri/bounding2.jpeg', className: classes.itemWide },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Galeri() {
  const [index, setIndex] = useState(-1);

  const navigate = useNavigate();

  const slides = useMemo(() => 
    GALERI_DATA.map((item) => ({ src: item.img, title: item.title })), 
  []);

  return (
    <Container size="xl" py={80} id="galeri" className={classes.galeriWrapper}>
      <Box ta="center" mb={60}>
        {/* <Badge variant="light" color="red.7" size="lg" radius="xl" mb="md">
          Dokumentasi Kito
        </Badge> */}
        <Title order={2} className={classes.sectionTitle}>
          Galeri Kito
        </Title>
        <Text c="dimmed" size="lg" mt="md" maw={650} mx="auto">
          Bingkai raso badunsanak, sumangaik bajuang di tanah rantau, sarato marawat budayo dalam jajak langkah kaluarga gadang IKAMMI Unsoed.
        </Text>
      </Box>

      <motion.div 
        className={classes.galleryGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {GALERI_DATA.map((item, i) => (
          <motion.div 
            key={item.id} 
            className={`${classes.galleryItem} ${item.className || ''}`} 
            onClick={() => setIndex(i)}
            variants={itemVariants}
          >
            <img src={item.img} alt={item.title} className={classes.imageContent} loading="lazy" />
            
            <div className={classes.imageOverlay}>
              <Box className={classes.overlayContent}>
                <Text c="white" className={classes.overlayText}>{item.title}</Text>                \
                <div className={classes.searchIcon}>
                  <IconSearch size={20} stroke={2.5} />
                </div>
              </Box>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Box ta="center" mt={60}>
        <Button 
          component="a" 
          href="/galeri" 
          size="lg" 
          radius="xl" 
          color="red.7" 
          variant="outline"
          rightSection={<IconArrowRight size={20} />}
          className={classes.exploreBtn}
          onClick={() => {
            navigate('/galeri');
            window.scrollTo(0, 0); // Memastikan saat pindah halaman, posisinya di atas
          }}
        >
          Telusuri Lebih Banyak
        </Button>
      </Box>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </Container>
  );
}
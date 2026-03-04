import { useState } from 'react';
import { Container, Title, Text, Breadcrumbs, Anchor, Group, Button, Modal, Image as MantineImage } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import classes from './GaleriPage.module.css';

// Data semua gambar dari folder public/asset/galeri/ berdasarkan screenshot
const allImages = [
  { title: 'Bakoa', url: '/asset/galeri/bakoa.jpeg' },
  { title: 'Baturaden', url: '/asset/galeri/baturaden.jpeg' },
  { title: 'Bounding', url: '/asset/galeri/bounding.jpeg' },
  { title: 'Bounding', url: '/asset/galeri/bounding2.jpeg' },
  { title: 'Bounding', url: '/asset/galeri/bounding3.jpeg' },
  // { title: 'Bounding', url: '/asset/galeri/bounding4.jpeg' },
  // { title: 'Bukber', url: '/asset/galeri/bukber.jpeg' },
  { title: 'Bukber 2025', url: '/asset/galeri/bukber2025.jpeg' },
  { title: 'Bukber 2026', url: '/asset/galeri/bukber2026.jpeg' },
  { title: 'Curug', url: '/asset/galeri/curug2.jpeg' },
  { title: 'Curug', url: '/asset/galeri/curugg.jpeg' },
  { title: 'Curug', url: '/asset/galeri/curug3.jpeg' },
  { title: 'Curug', url: '/asset/galeri/curug4.jpeg' },
  { title: 'Demisioner', url: '/asset/galeri/demis1.JPG' },
  { title: 'Demisioner', url: '/asset/galeri/demis2.JPG' },
  { title: 'Demisioner', url: '/asset/galeri/demis3.jpeg' },
  { title: 'Idul Adha', url: '/asset/galeri/idul adha.jpeg' },
  { title: 'Idul Fitri', url: '/asset/galeri/idul fitri1.JPG' },
  { title: 'Idul Fitri', url: '/asset/galeri/idul fitri2.JPG' },
  { title: 'Idul Fitri', url: '/asset/galeri/idul fitri3.JPG' },
  { title: 'Main Basamo', url: '/asset/galeri/main basamo.jpeg' },
  { title: 'Makan Basamo', url: '/asset/galeri/makan2.jpeg' },
  { title: 'Nari Piriang', url: '/asset/galeri/pangsud3.jpg' },
  { title: 'Pangsud', url: '/asset/galeri/pangsud.jpg' },
  { title: 'Pangsud', url: '/asset/galeri/nari piring.jpeg' },
  { title: 'Pangsud', url: '/asset/galeri/pangsud2.jpg' },
  { title: 'Pulang Basamo', url: '/asset/galeri/pulang basamo.jpeg' },
  { title: 'Pulang Basamo', url: '/asset/galeri/pulang basamo2.jpeg' },
];

export function GaleriPage() {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [selectedImg, setSelectedImg] = useState<{title: string, url: string} | null>(null);

  const breadcrumbItems = [
    { title: 'Beranda', href: '/' },
    { title: 'Semua Galeri', href: '/galeri' },
  ].map((item, index) => (
    <Anchor onClick={() => navigate(item.href)} key={index} c="dimmed" size="sm" style={{ cursor: 'pointer' }}>
      {item.title}
    </Anchor>
  ));

  const openLightbox = (image: {title: string, url: string}) => {
    setSelectedImg(image);
    setOpened(true);
  };

  return (
    <>
      <Container size="lg" py={120}>
        <Breadcrumbs mb="xl">{breadcrumbItems}</Breadcrumbs>

        <div style={{ marginBottom: '40px' }}>
          <Title order={1} className={classes.pageTitle}>
            Semua Galeri Kegiatan
          </Title>
          <Text c="dimmed" mt="sm" maw={600}>
            Kumpulan lengkap dokumentasi momen kebersamaan dan perjalanan keluarga besar IKAMMI UNSOED.
          </Text>
        </div>

        {/* Layout Masonry CSS */}
        <div className={classes.masonryGrid}>
          {allImages.map((image, index) => (
            <div 
              key={index} 
              className={classes.masonryItem}
              onClick={() => openLightbox(image)}
            >
              <img src={image.url} alt={image.title} className={classes.image} loading="lazy" />
              <div className={classes.overlay}>
                <span className={classes.title}>{image.title}</span>
              </div>
            </div>
          ))}
        </div>

        <Group justify="center" mt={60}>
          <Button variant="subtle" color="red.7" onClick={() => navigate('/')}>
            Kembali ke Beranda
          </Button>
        </Group>
      </Container>

      {/* Lightbox / Modal untuk melihat gambar full size */}
      <Modal 
        opened={opened} 
        onClose={() => setOpened(false)} 
        size="auto" 
        centered 
        withCloseButton={false}
        padding={0}
      >
        {selectedImg && (
          <div style={{ position: 'relative' }}>
            <MantineImage 
              src={selectedImg.url} 
              alt={selectedImg.title} 
              style={{ maxHeight: '90vh', objectFit: 'contain' }}
            />
          </div>
        )}
      </Modal>
    </>
  );
}
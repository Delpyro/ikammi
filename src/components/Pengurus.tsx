import { useState } from 'react';
import { Container, Title, Text, Grid, Card, Badge, Button, Modal, List, ThemeIcon, Divider, Box, Avatar, Image, ActionIcon, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconUsersGroup, IconTargetArrow, IconX } from '@tabler/icons-react';
import classes from './Pengurus.module.css';

// 1. DATA BPH (Ditambah Jurusan)
const bphData = [
  { nama: "M. Zein Rifa'i", nim: 'A1D023048', jabatan: 'Ketua Umum', jurusan: 'Agroteknologi', foto: '/asset/zhen.png' },
  { nama: 'Ilona Petrina Henri', nim: 'A1D024266', jabatan: 'Wakil Ketua Umum', jurusan: 'Agroteknologi', foto: '/asset/ilona.png' },
  { nama: 'Muhammad Sholahatul Haq', nim: 'H1D024060', jabatan: 'Sekretaris', jurusan: 'Informatika', foto: '/asset/haq.png' },
  { nama: 'Dinny Putri Ningsih', nim: 'B1A024165', jabatan: 'Bendahara', jurusan: 'Manajemen', foto: '/asset/dini.png' },
];

// 2. DATA DIVISI (Ditambah Jurusan)
const divisiData = [
  {
    id: 'psda',
    nama: 'Divisi PSDA',
    deskripsi: 'Pengembangan Sumber Daya Anggota',
    foto: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    anggota: [
      { nama: 'Sanial Bedri Jilan Indra', nim: 'B1A024120', jabatan: 'Kabid PSDA', jurusan: 'Manajemen', foto: '/asset/sanial.png' },
      { nama: 'Cati Bilang Pandai', nim: 'E1A024248', jabatan: 'Staff PSDA', jurusan: 'Ilmu Hukum', foto: '/asset/cati.png' },
    ],
    proker: ['Malam Keakraban (Makrab) Maba', 'Upgrading Pengurus', 'Database Anggota IKAMMI'],
  },
  {
    id: 'kwu',
    nama: 'Divisi KWU',
    deskripsi: 'Kewirausahaan',
    foto: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    anggota: [
      { nama: 'Naifa Zahirah Safitri', nim: 'D0A024058', jabatan: 'Kabid KWU', jurusan: 'Administrasi', foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
      { nama: 'Mhd Fahri Irfandi Dewantara', nim: 'H1D024012', jabatan: 'Staff KWU', jurusan: 'Informatika', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    ],
    proker: ['Pembuatan Kemeja PDH', 'Danus Jualan Makanan', 'Merchandise IKAMMI'],
  },
  {
    id: 'mikat',
    nama: 'Divisi Mikat',
    deskripsi: 'Minat dan Bakat',
    foto: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    anggota: [
      { nama: 'Serlyna Meisha Putri', nim: 'A1A024129', jabatan: 'Kabid Mikat', jurusan: 'Ilmu Ekonomi', foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    ],
    proker: ['Latihan Rutin Tari Minang', 'Futsal Basamo', 'IKAMMI Cup (Olahraga)'],
  },
  {
    id: 'humas',
    nama: 'Divisi Humas',
    deskripsi: 'Hubungan Masyarakat',
    foto: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    anggota: [
      { nama: 'Neila Sifa Desti', nim: 'F1C023020', jabatan: 'Kabid Humas', jurusan: 'Ilmu Komunikasi', foto: '/asset/naila.png' },
      { nama: 'Muhammad Nabil Putra Monti', nim: 'H1D023063', jabatan: 'Staff Humas', jurusan: 'Informatika', foto: '/asset/nabil.png' },
    ],
    proker: ['Kunjungan Ormada Lain', 'Bakti Sosial', 'Delegasi Undangan Kampus'],
  },
  {
    id: 'medkom',
    nama: 'Divisi Medkom',
    deskripsi: 'Media dan Komunikasi',
    foto: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    anggota: [
      { nama: 'Muhammad Zacky Makarim', nim: 'H1D024121', jabatan: 'Kabid Medkom', jurusan: 'Informatika', foto: '/asset/zacky.png' },
      { nama: 'M. Rifqi', nim: 'J1E024021', jabatan: 'Staff Medkom', jurusan: 'Sastra Inggris', foto: '/asset/rifqi.png' },
    ],
    proker: ['Pengelolaan Instagram', 'Pembuatan Website Profile', 'Dokumentasi Kegiatan'],
  },
];

export function Pengurus() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedDivisi, setSelectedDivisi] = useState<typeof divisiData[0] | null>(null);

  const handleOpenModal = (divisi: typeof divisiData[0]) => {
    setSelectedDivisi(divisi);
    open();
  };

  return (
    <Container size="lg" py={60} id="pengurus">
      {/* HEADER SECTION */}
      <Box ta="center" mb={60}>
        <Badge variant="light" color="red.7" size="lg" radius="xl" mb="sm">
          Kabinet Tahun Ini
        </Badge>
        <Title order={1} className={classes.mainTitle}>
          Struktur Kepengurusan IKAMMI Unsoed
        </Title>
        <Text c="dimmed" size="lg" mt="md" maw={600} mx="auto">
          Mengenal lebih dekat para penggerak roda organisasi IKAMMI Unsoed masa bakti tahun ini.
        </Text>
      </Box>

      {/* 1. SECTION BPH */}
      <Title order={3} ta="center" mb="xl" className={classes.sectionTitle}>
        Badan Pengurus Harian
      </Title>
      
      <Grid gutter="xl" justify="center" mb={70}>
        {bphData.map((person) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }} key={person.nim}>
            <Card radius="lg" padding="xl" className={classes.bphCard} ta="center" h="100%">
              <div className={classes.avatarWrapper}>
                <Avatar 
                  src={person.foto} 
                  size={130} 
                  radius="100%" 
                  className={classes.bphAvatar}
                  mb="md" 
                />
              </div>
              <Stack gap="xs" justify="center" style={{ flex: 1 }}>
                <Badge variant="gradient" gradient={{ from: 'red.7', to: 'orange.6', deg: 90 }} size="md" mx="auto">
                  {person.jabatan}
                </Badge>
                <Box>
                  <Text fw={800} size="lg" lh={1.2}>{person.nama}</Text>
                  <Text size="xs" c="dimmed" mt={4} fw={500}>{person.nim}</Text>
                  {/* Menampilkan Jurusan BPH */}
                  <Text size="xs" c="red.8" fw={700} mt={2}>{person.jurusan}</Text>
                </Box>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Divider my={50} variant="dashed" color="gray.3" />

      {/* 2. SECTION DIVISI */}
      <Title order={3} ta="center" mb="xl" className={classes.sectionTitle}>
        Divisi Kabinet
      </Title>

      <Grid gutter="xl" justify="center">
        {divisiData.map((divisi) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={divisi.id}>
            <Card radius="lg" withBorder padding="md" className={classes.divisiCard}>
              <Card.Section className={classes.imageContainer}>
                <Image src={divisi.foto} height={180} alt={divisi.nama} className={classes.zoomImage} />
                <div className={classes.imageOverlay} />
              </Card.Section>

              <Box style={{ flex: 1, padding: '16px 8px' }}>
                <Group justify="space-between" mb="xs">
                  <Title order={4} c="dark.8">{divisi.nama}</Title>
                  <IconUsersGroup size={20} color="#D0021B" stroke={2} />
                </Group>
                <Text size="sm" c="dimmed" lh={1.5} mb="xl">
                  {divisi.deskripsi}
                </Text>
              </Box>

              <Button 
                variant="light" 
                color="red.7" 
                fullWidth 
                radius="md"
                size="md"
                onClick={() => handleOpenModal(divisi)}
                className={classes.actionButton}
              >
                Lihat Detail
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* 3. MODAL POP-UP */}
      <Modal 
        opened={opened} 
        onClose={close} 
        withCloseButton={false} 
        // centered
        yOffset={90} // <--- TAMBAHKAN INI (Jarak dari atas layar, melewati Navbar 70px)
        size="lg"
        radius="lg"
        padding={0} 
        overlayProps={{ backgroundOpacity: 0.6, blur: 5 }}
        transitionProps={{ transition: 'pop', duration: 300 }}
        // style={{ paddingTop: '140px' }}
        // zIndex={10000} 
      >
        {selectedDivisi && (
          <Box pb="xl" >
            {/* BANNER HEADER DIVISI */}
            <div style={{ position: 'relative', height: '120px', overflow: 'hidden' ,borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
              <Image 
                src={selectedDivisi.foto} 
                h="100%"
                w="100%"
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)' }} />
              
              <ActionIcon 
                variant="filled" 
                color="rgba(0,0,0,0.4)" 
                radius="xl" 
                size="lg" 
                onClick={close}
                style={{ position: 'absolute', top: '15px', right: '15px', backdropFilter: 'blur(4px)' }}
              >
                <IconX size={18} stroke={2.5} color="white" />
              </ActionIcon>

              <Box style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px' }}>
                <Title order={2} c="white" style={{ letterSpacing: 0.5 }}>{selectedDivisi.nama}</Title>
                <Text c="gray.4" size="md" mt={4} fw={500}>{selectedDivisi.deskripsi}</Text>
              </Box>
            </div>

            {/* KONTEN MODAL (Anggota & Proker) */}
            <Box px="xl" pt="lg">
              <Group mb="md" gap="xs">
                <IconUsersGroup size={20} color="#D0021B" />
                <Text fw={800} size="sm" c="red.7" tt="uppercase" style={{ letterSpacing: 1 }}>
                  Susunan Pengurus
                </Text>
              </Group>
              
              <Grid mb={30}>
                {selectedDivisi.anggota.map((anggota) => (
                  <Grid.Col span={{ base: 12, sm: 6 }} key={anggota.nim}>
                    {/* PERUBAHAN KE LAYOUT VERTIKAL: Avatar Besar, Text di bawahnya */}
                    <Card withBorder radius="md" p="md" className={classes.modalMemberCard} ta="center">
                      <Avatar 
                        src={anggota.foto} 
                        radius="100%" 
                        size={100} 
                        mx="auto" 
                        mb="sm" 
                        style={{ border: '3px solid #ffe3e3' }} 
                      />
                      <Badge size="xs" color="red.7" variant="filled" mb="xs">
                        {anggota.jabatan}
                      </Badge>
                      <Text fw={800} size="sm" lh={1.2} lineClamp={2}>{anggota.nama}</Text>
                      <Text size="xs" c="dimmed" mt={4} fw={500}>{anggota.nim}</Text>
                      {/* Teks Jurusan dengan aksen warna Merah Gelap */}
                      <Text size="xs" c="red.8" fw={700} mt={2}>{anggota.jurusan}</Text>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid>

              <Group mb="md" gap="xs">
                <IconTargetArrow size={20} color="#D0021B" />
                <Text fw={800} size="sm" c="red.7" tt="uppercase" style={{ letterSpacing: 1 }}>
                  Program Kerja Unggulan
                </Text>
              </Group>
              
              <Card withBorder radius="md" bg="gray.0" p="lg" style={{ borderColor: '#f1f3f5' }}>
                <List
                  spacing="md"
                  size="sm"
                  center
                  icon={
                    <ThemeIcon color="red.7" size={24} radius="xl" variant="filled">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </ThemeIcon>
                  }
                >
                  {selectedDivisi.proker.map((prokerItem, idx) => (
                    <List.Item key={idx}>
                      <Text fw={600} size="sm" c="dark.6">{prokerItem}</Text>
                    </List.Item>
                  ))}
                </List>
              </Card>
            </Box>
          </Box>
        )}
      </Modal>
    </Container>
  );
}
import { Container, Grid, Image, Title, Text, Button, Group } from '@mantine/core';

export function TentangKami() {
  return (
    <Container size="md" py="xl" id="profil" style={{ marginTop: '50px', marginBottom: '50px' }}>
      <Grid gutter="xl" align="center">
        {/* Kolom Kiri: Teks Deskripsi */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Title order={2} style={{ marginBottom: '20px', color: '#D0021B' }}>
            Apo Itu IKAMMI?
          </Title>
          <Text size="lg" mb="md" style={{ lineHeight: 1.6 }}>
            Ikatan Mahasiswa Minang (IKAMMI) Universitas Jenderal Soedirman adalah wadah kekeluargaan bagi seluruh mahasiswa asal Minangkabau yang sedang menuntut ilmu di Purwokerto.
          </Text>
          <Text size="md" color="dimmed" mb="xl" style={{ lineHeight: 1.6 }}>
            Berdiri sejak [Tahun Berdiri], kami bertujuan untuk mempererat tali silaturahmi, menjaga nilai-nilai budaya Minang di tanah rantau, serta saling bahu-membahu dalam akademik maupun kehidupan sosial. 
            Di sini, kito duduak samo randah, tagak samo tinggi.
          </Text>

          <Group>
            <Button variant="outline" color="red" radius="md" size="md">
              Struktur Kepengurusan
            </Button>
          </Group>
        </Grid.Col>

        {/* Kolom Kanan: Gambar */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image
            src="https://images.unsplash.com/photo-1577971132997-c10be9372519?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Ilustrasi Budaya Minang"
            radius="md"
            style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
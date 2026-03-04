import { Container, Grid, Title, Text, Timeline, ThemeIcon, Paper, Image } from '@mantine/core';
import classes from './Sejarah.module.css';

export function Sejarah() {
  return (
    <section id="sejarah" className={classes.wrapper}>
      <Container size="lg">
        <Grid gutter={50} align="flex-start">
          
          {/* KOLOM KIRI: Foto Sticky */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <div className={classes.stickyImage}>
              <Text c="red.7" fw={700} style={{ letterSpacing: 2, textTransform: 'uppercase' }} mb="xs">
                Jajak Langkah
              </Text>
              <Title order={2} mb="lg" style={{ fontSize: '2.5rem', lineHeight: 1.1 }}>
                Sejarah Berdirinya IKAMMI Unsoed
              </Title>
              
              <Image 
                src="https://getlost.id/wp-content/uploads/2021/11/jam-gadang_1999979717.jpg" 
                alt="Pemandangan Minangkabau" 
                radius="md"
                // shadow="md"
              />
            </div>
          </Grid.Col>

          {/* KOLOM KANAN: Timeline Cerita */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Paper className={classes.paperCard}>
              
              <div className={classes.quote}>
                "Barek samo dipikua, ringan samo dijinjiang. Sajauah-jauah malangkah, ranah Minang dibaok juo."
              </div>

              <Timeline active={3} bulletSize={24} lineWidth={2} color="red.7">
                
                <Timeline.Item 
                  title={<Text fw={900} size="xl" mb={4}>Gagasan Awal di Tanah Rantau</Text>}
                  bullet={
                    <ThemeIcon size={24} radius="xl" color="red.7">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                    </ThemeIcon>
                  }
                >
                  <Text c="dimmed" size="sm" mb="xs">Tahun [Isi Tahun, misal: 2005]</Text>
                  <Text size="md" style={{ lineHeight: 1.6 }}>
                    Berawal dari kerinduan sekelompok mahasiswa baru asal Sumatera Barat yang sering berkumpul di sekitar kampus Unsoed. Berangkat dari rasa senasib sepenanggungan di tanah perantauan Purwokerto, muncul gagasan untuk membuat sebuah wadah kekeluargaan yang lebih terstruktur.
                  </Text>
                </Timeline.Item>

                <Timeline.Item 
                  title={<Text fw={900} size="xl" mt="xl" mb={4}>Deklarasi IKAMMI Unsoed</Text>}
                >
                  <Text c="dimmed" size="sm" mb="xs">Tahun [Isi Tahun]</Text>
                  <Text size="md" style={{ lineHeight: 1.6 }}>
                    Setelah berbagai diskusi panjang (*duduak basamo*), Ikatan Mahasiswa Minang (IKAMMI) Universitas Jenderal Soedirman secara resmi didirikan. Organisasi ini dibentuk bukan sekadar tempat berkumpul, melainkan sebagai jembatan silaturahmi, pelestarian budaya, dan wadah bertukar informasi akademik bagi seluruh mahasiswa Minang.
                  </Text>
                </Timeline.Item>

                <Timeline.Item 
                  title={<Text fw={900} size="xl" mt="xl" mb={4}>Masa Perkembangan & Pengakuan</Text>}
                >
                  <Text c="dimmed" size="sm" mb="xs">Tahun [Isi Tahun]</Text>
                  <Text size="md" style={{ lineHeight: 1.6 }}>
                    IKAMMI mulai menunjukkan eksistensinya di kancah universitas melalui partisipasi aktif dalam kegiatan Expo Ormada, pagelaran seni budaya, hingga menjalin relasi dengan organisasi kedaerahan Nusantara lainnya di Purwokerto.
                  </Text>
                </Timeline.Item>

                <Timeline.Item 
                  title={<Text fw={900} size="xl" mt="xl" mb={4}>IKAMMI Hari Ini</Text>}
                  bullet={
                    <ThemeIcon size={24} radius="xl" color="red.7">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    </ThemeIcon>
                  }
                >
                  <Text c="dimmed" size="sm" mb="xs">Sekarang</Text>
                  <Text size="md" style={{ lineHeight: 1.6 }}>
                    Kini, IKAMMI Unsoed telah menjadi rumah kedua bagi ratusan mahasiswa Minangkabau. Dengan berbagai program kerja unggulan seperti Pulang Basamo, Makrab Maba, dan Pagelaran Seni, IKAMMI terus berkomitmen mencetak generasi yang intelektual tanpa melupakan akar budayanya. *Patah tumbuah, hilang baganti!*
                  </Text>
                </Timeline.Item>

              </Timeline>
            </Paper>
          </Grid.Col>

        </Grid>
      </Container>
    </section>
  );
}
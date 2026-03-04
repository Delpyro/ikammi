import { 
  Container, Title, Text, Box, Grid, 
  Image, Paper, Group, Button 
} from '@mantine/core';
import classes from './About.module.css';

export function About() {
  return (
    <section id="tentang" className={classes.wrapper}>
      <Container size="lg">
        <Grid gutter={80} align="center">
          
          {/* Bagian Visual (Kiri) */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <div className={classes.imageScene}>
              <div className={classes.accentBox} />
              <Image
                src="asset/pangsud.jpg"
                alt="Minang Culture"
                className={classes.mainImage}
                radius="md"
              />
              <Paper className={classes.floatingTag} shadow="xl" p="md" radius="sm">
                <Text fw={700} size="sm" c="red.9">EST. 2005</Text>
                <Text size="xs" c="dimmed">Barek samo dipikua</Text>
              </Paper>
            </div>
          </Grid.Col>

          {/* Bagian Konten (Kanan) */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Box className={classes.content}>
              <Text className={classes.bgText}>IKAMMI</Text>
              
              <Title className={classes.title}>
                <span className={classes.highlight}>APO ITU IKAMMI?</span>
              </Title>

              <div className={classes.description}>
                <Text size="lg" mb="md" fw={500} c="dark.4">
                  Ikatan Mahasiswa Minang (IKAMMI) Universitas Jenderal Soedirman 
                  adalah wadah kekeluargaan bagi seluruh mahasiswa asal Minangkabau 
                  yang sedang menuntut ilmu di Purwokerto.
                </Text>
                
                <Text c="dimmed" lh={1.8}>
                  Berdiri sejak 2005, kami bertujuan untuk mempererat tali silaturahmi, 
                  menjaga nilai-nilai budaya Minang di tanah rantau, serta saling 
                  bahu-membahu dalam akademik maupun kehidupan sosial. 
                  Di sini, <i>kito duduak samo randah, tagak samo tinggi.</i>
                </Text>
              </div>

              <div className={classes.footerSignature}>
                <div className={classes.line} />
                <Text c="dimmed" size="sm">
                  "Sajauah-jauah malangkah, Ranah Minang dibaok juo."
                </Text>
              </div>

              <Group mt="xl">
                <Button 
                  variant="outline" 
                  color="red.9" 
                  radius="md" 
                  size="md"
                  className={classes.ctaButton}
                >
                  Nah, Gabuang Lai!
                </Button>
              </Group>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
import { useState } from 'react';
import { Container, Grid, Title, Text, TextInput, Textarea, Button, Box, Paper, Group } from '@mantine/core';
import { IconBrandWhatsapp, IconMessages } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import classes from './ContactForm.module.css';

export function ContactForm() {
  // State untuk menyimpan inputan user
  const [formData, setFormData] = useState({
    nama: '',
    jurusan: '',
    pesan: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Ganti dengan nomor WhatsApp Admin IKAMMI (Gunakan format 62 tanpa + atau 0)
    const nomorWhatsApp = '6285263866277'; 

    // 2. Format pesan yang akan dikirim ke WhatsApp
    const teksWhatsApp = `Halo Uda/Uni Admin IKAMMI Unsoed, perkenalkan:%0A%0A*Nama:* ${formData.nama}%0A*Jurusan/Angkatan:* ${formData.jurusan}%0A%0A*Pesan/Pertanyaan:*%0A${formData.pesan}`;

    // 3. Buat URL WhatsApp API
    const url = `https://wa.me/${nomorWhatsApp}?text=${teksWhatsApp}`;

    // 4. Buka di tab baru
    window.open(url, '_blank');
  };

  return (
    <Box className={classes.wrapper} id="tanyo-ciek" py={80}>
      <Container size="lg">
        <Grid gutter={{ base: 40, md: 60 }} align="center">
          
          {/* Bagian Kiri: Teks & Penjelasan */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Group gap="sm" mb="md">
                <IconMessages size={28} color="#D0021B" />
                <Text fw={700} c="red.7" tt="uppercase" style={{ letterSpacing: '2px' }}>
                  Tanyo Ciek Uda Uni
                </Text>
              </Group>
              
              <Title order={2} className={classes.title} mb="lg">
                Ado nan nio ditanyoan soal IKAMMI?
              </Title>
              
              <Text c="dimmed" size="lg" lh={1.7} mb="xl">
                Jan sagan-sagan untuak batanyo. Isi form di sampiang untuak tahubuang langsuang jo admin kito malalui WhatsApp. Kami siap mambantu sanak!
              </Text>

              {/* Ganti <Box> menjadi <Paper>
              <Paper className={classes.highlightBox} p="md" radius="md">
                <Text size="sm" fw={500} c="dark.8">
                💡 <b>Tips:</b> Pastikan nomor WhatsApp sanak aktif supayo admin bisa langsuang mambaleh pasan.
                </Text>
              </Paper> */}
            </motion.div>
          </Grid.Col>

          {/* Bagian Kanan: Form Input */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper withBorder shadow="xl" radius="xl" p={{ base: 'xl', sm: 40 }} className={classes.formCard}>
                <form onSubmit={handleSubmit}>
                  <Grid gutter="md">
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Nama Langkok"
                        placeholder="Cth: Muhammad Nabil"
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                      />
                    </Grid.Col>
                    
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Jurusan / Angkatan"
                        placeholder="Cth: Informatika 23"
                        name="jurusan"
                        value={formData.jurusan}
                        onChange={handleChange}
                        required
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                      />
                    </Grid.Col>

                    <Grid.Col span={12}>
                      <Textarea
                        label="Pesan atau Partanyaan"
                        placeholder="Tuliskan apo nan nio sanak tanyoan di siko..."
                        name="pesan"
                        value={formData.pesan}
                        onChange={handleChange}
                        required
                        minRows={4}
                        autosize
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                      />
                    </Grid.Col>
                  </Grid>

                  <Button 
                    type="submit"
                    size="lg" 
                    radius="md" 
                    color="green.6" 
                    fullWidth 
                    mt="xl"
                    leftSection={<IconBrandWhatsapp size={22} />}
                    className={classes.submitBtn}
                  >
                    Kirim via WhatsApp
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid.Col>

        </Grid>
      </Container>
    </Box>
  );
}
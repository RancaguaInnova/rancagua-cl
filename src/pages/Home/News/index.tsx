import React from 'react'
import Title from '../../../components/Title'
import MainNews from '../../../components/News/MainNews'
import SecondaryNews from '../../../components/News/SecondaryNews'
import ViewMoreButton from '../../../components/ViewMoreButton'
import styles from './styles.module.sass'

const mainNews = {
  publishedAt: '2020-02-12',
  title: 'Taller de Teoría y Solfeo',
  imageUrl: 'https://promocionmusical.es/wp-content/uploads/2018/12/que-es-una-partitura.jpg',
  body:
    'Este mes de febrero se da inicio al vegésimo séptimo taller de teoría musical y solfeo. Aprende todo lo necesario',
}

const secondaryNews = [
  {
    publishedAt: '2020-02-01',
    title: 'Taller "Cultivando Nuestro Patrimonio Natural',
  },
  {
    publishedAt: '2020-03-08',
    title: 'Tercera Corrida Familiar',
  },
]

const News: React.FC = () => {
  return (
    <section className={styles.news}>
      <Title>NOTICIAS</Title>
      <MainNews news={mainNews} />
      {secondaryNews.map(News => (
        <SecondaryNews news={News} />
      ))}
      <div className={styles.viewMore}>
        <ViewMoreButton text='Ver todas las noticias' />
      </div>
    </section>
  )
}

export default News

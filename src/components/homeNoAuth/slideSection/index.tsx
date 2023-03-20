import { CourseType } from "../../../services/courseService"
import Link from "next/link";
import { Button, Container } from "reactstrap";
import SlideComponent from "../../common/slideComponent";
import styles from "./styles.module.scss";


interface props {
  newstCourses: CourseType[];
}

const SlideSection = function ({ newstCourses}: props) {
  return (
    <>
      <Container className="d-flex flex-column align-items-center py-5">
        <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
        <SlideComponent course={newstCourses} />
        <Link href="/register">
          <Button outline color="light" className={styles.slideSectionBtn}>
            Se cadastre para acessar!
            </Button>
        </Link>
      </Container>
    </>
  )
}

export default SlideSection;
import Header from './header';
import Footer from './footer';
import Spmenu from './spmenu'

export default function Layout({ children }) {
  return (
    <>
      <Header />
        <main>{children}</main>
      <Spmenu />
      <Footer />
    </>
  );
}
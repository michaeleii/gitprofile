function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer p-5 footer-center bg-base-100 text-base-content">
      <p>Copyright &copy; {year} Michael Lei</p>
    </footer>
  );
}
export default Footer;

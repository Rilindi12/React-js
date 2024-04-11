export default function CurrentData () {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <p>
        <small>Copywrite © {year}</small>
      </p>
    </>
  )
}
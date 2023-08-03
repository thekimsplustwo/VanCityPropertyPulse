import { Button } from '@mui/material';

function CompareDeleteButton({ zpid, children }) {
  const handleDelete = () => {
    const items = new URLSearchParams(window.location.search).getAll('item');

    const filteredItems = items.filter(item => item !== zpid);

    const newUrl = `${window.location.origin}${
      window.location.pathname
    }?${filteredItems.map(item => `item=${item}`).join('&')}`;

    window.location.href = `${window.location.origin}/compare?${newUrl}`;
  };

  return (
    <Button
      style={{ maxWidth: 500 }}
      variant="outlined"
      color="secondary"
      onClick={handleDelete}
    >
      {children}
    </Button>
  );
}

export default CompareDeleteButton;

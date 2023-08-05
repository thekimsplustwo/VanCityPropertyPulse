import { Button } from '@mui/material';

function CompareDeleteButton({ zpid, children }) {
  function removeQueryParam(key, value) {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const paramArray = Array.from(searchParams.entries());
    const updatedParamArray = paramArray.filter(
      param => !(param[0] === key && param[1] === value)
    );
    const updatedSearchParams = new URLSearchParams(updatedParamArray);
    url.search = updatedSearchParams.toString();
    return url.toString();
  }

  const handleDelete = () => {
    const updatedUrl = removeQueryParam('item', zpid);
    window.location.href = updatedUrl;
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

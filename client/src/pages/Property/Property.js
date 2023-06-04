import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function Property() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [query, setQuery] = useSearchParams();
  const searchParams = new URLSearchParams(query);

  return <Main />;
}

const Main = styled.div``;

export default Property;

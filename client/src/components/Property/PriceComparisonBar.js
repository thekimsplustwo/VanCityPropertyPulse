import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';

function PriceComparisonBar({ averagePrice, propertyPrice }) {
  return (
    <Box>
      <BarChart
        margin={{ top: 5, right: 3, bottom: 50, left: 100 }}
        xAxis={[
          {
            id: 'priceCategories',
            data: ['Average Price Nearby', 'Property Price'],
            scaleType: 'band',
            categoryGapRatio: 0.7,
          },
        ]}
        series={[
          {
            data: [averagePrice, propertyPrice],
            color: ['pink'],
          },
        ]}
        width={400}
        height={300}
      />
    </Box>
  );
}

export default PriceComparisonBar;

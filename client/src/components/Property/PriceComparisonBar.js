import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';

function PriceComparisonBar({ medianPrice, propertyPrice, averagePrice }) {
  return (
    <Box>
      <BarChart
        margin={{ top: 5, right: 3, bottom: 50, left: 100 }}
        xAxis={[
          {
            id: 'priceCategories',
            data: [
              'Average Price Nearby',
              'Median Price Nearby',
              'Property Price',
            ],
            scaleType: 'band',
            categoryGapRatio: 0.8,
          },
        ]}
        series={[
          {
            data: [averagePrice, medianPrice, propertyPrice],
            color: ['pink'],
          },
        ]}
        width={600}
        height={300}
      />
    </Box>
  );
}

export default PriceComparisonBar;

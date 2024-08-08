export const getTotalSpecificationCost = (data) => {
   return data.orderLine.ingredients.reduce((sum, ingredient) => {
      return sum + (ingredient.sourceProduct?.actualPrice || 0);
   }, 0);
};
export const getTotalProcessCost = (data) => {
   const graphData = JSON.parse(data.orderLine.graph);
   const filteredGraphData = graphData.filter(item => item.source && item.target);
   return filteredGraphData.reduce((sum, item) => {
      const durationInHours = item.data.duration / 3600;
      const cost = item.data.costPerHour * durationInHours;
      return sum + cost;
   }, 0);
};
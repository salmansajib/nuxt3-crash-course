export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currentKey } = useRuntimeConfig();

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currentKey}`;

  const { data } = await $fetch(uri);

  return data;
});

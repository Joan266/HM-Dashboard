export async function backendAPICall(path: string, method: string = 'GET', data: any = null) {
  const url = `${import.meta.env.VITE_PUBLIC_API_DOMAIN}/${path}`;

  const token = localStorage.getItem('token');
  console.log(token)
  if (!token) {
    console.error('Error: No authentication token found');
    throw new Error('No authentication token found');
  }

  const options: RequestInit = {
    method,
    headers: {
      'Authorization': `Token ${token}`,
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    console.error(`Error: ${response.status} ${response.statusText}`);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const json = await response.json();
  return json;
}

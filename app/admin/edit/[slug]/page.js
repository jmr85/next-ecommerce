import EditForm from "@/components/admin/EditForm"

const EditPage = async ({params}) => {
  const { slug } = params;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  
  if (!API_URL) {
    console.error("NEXT_PUBLIC_API_URL is not defined");
    return <div>Error: API URL not configured</div>;
  }

  const res = await fetch(`${API_URL}/api/product/${slug}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    console.error(`HTTP error! status: ${res.status}`);
    return <div>Error: Failed to fetch product</div>;
  }

  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    console.error(`Expected JSON, got ${contentType}`);
    return <div>Error: Invalid response from server</div>;
  }

  const product = await res.json();
  
  return (
    <div>
      <EditForm item={product}/>
    </div>
  );
}

export default EditPage
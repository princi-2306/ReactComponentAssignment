import { Column, DataTable } from "./components/component2/DataTable";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}

const DataTableComp = () => {
  const products: Product[] = [
    { id: "1", name: "Laptop", category: "Electronics", price: 999, stock: 12 },
    {
      id: "2",
      name: "Smartphone",
      category: "Electronics",
      price: 699,
      stock: 25,
    },
    {
      id: "3",
      name: "Desk Chair",
      category: "Furniture",
      price: 199,
      stock: 8,
    },
    { id: "4", name: "Coffee Mug", category: "Kitchen", price: 12, stock: 50 },
    {
      id: "5",
      name: "Headphones",
      category: "Electronics",
      price: 149,
      stock: 15,
    },
  ];

  // Columns configuration
  const columns: Column<Product>[] = [
    { key: "name", title: "Product Name", dataIndex: "name", sortable: true },
    {
      key: "category",
      title: "Category",
      dataIndex: "category",
      sortable: true,
    },
    { key: "price", title: "Price ($)", dataIndex: "price", sortable: true },
    { key: "stock", title: "Stock", dataIndex: "stock", sortable: true },
  ];

  // Handle row selection
  const handleRowSelect = (selectedProducts: Product[]) => {
    console.log("Selected products:", selectedProducts);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Product Inventory
        </h1>

        <div className="space-y-8">
          {/* Basic DataTable */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Basic Table</h2>
            <DataTable<Product> data={products} columns={columns} />
          </div>

          {/* Selectable DataTable */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Selectable Table</h2>
            <DataTable<Product>
              data={products}
              columns={columns}
              selectable
              onRowSelect={handleRowSelect}
            />
          </div>

          {/* Loading State */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Loading State</h2>
            <DataTable<Product> data={[]} columns={columns} loading={true} />
          </div>

          {/* Empty State */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Empty Table</h2>
            <DataTable<Product> data={[]} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTableComp;

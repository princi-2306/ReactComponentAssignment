import { useMemo, useState } from "react";
import { Loader2 } from "lucide-react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);

  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(
    new Set()
  );

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key: keyof T) => {
    setSortConfig((prev) =>
      prev?.key === key && prev.direction === "asc"
        ? { key, direction: "desc" }
        : { key, direction: "asc" }
    );
  };

  const toggleRow = (id: string | number) => {
    if (!selectable) return;
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      onRowSelect?.(data.filter((row) => newSet.has(row.id)));
      return newSet;
    });
  };

  return (
    <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            {selectable && <th className="px-4 py-2"></th>}
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2 text-left font-medium text-gray-700 cursor-pointer select-none"
                onClick={() => col.sortable && handleSort(col.dataIndex)}
              >
                {col.title}
                {col.sortable && sortConfig?.key === col.dataIndex && (
                  <span className="ml-1">
                    {sortConfig.direction === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="py-6 text-center text-gray-500"
              >
                <Loader2 className="animate-spin inline-block w-5 h-5 mr-2" />
                Loading...
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="py-6 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          ) : (
            sortedData.map((row) => (
              <tr
                key={row.id}
                className={`hover:bg-gray-50 ${
                  selectable && selectedRows.has(row.id)
                    ? "bg-blue-50"
                    : "bg-white"
                }`}
              >
                {selectable && (
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(row.id)}
                      onChange={() => toggleRow(row.id)}
                      className="rounded"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2 text-gray-700">
                    {String(row[col.dataIndex])}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

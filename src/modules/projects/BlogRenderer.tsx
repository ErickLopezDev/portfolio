export function BlogRenderer({ content }: { content: any[] }) {
  return (
    <div className="space-y-6">
      {content.map((block, idx) => {
        switch (block.type) {
          case "header":
            if (block.level === 1)
              return (
                <h1 key={idx} className="text-3xl font-bold mb-4">
                  {block.text}
                </h1>
              );
            if (block.level === 2)
              return (
                <h2 key={idx} className="text-2xl font-bold mt-6 mb-3">
                  {block.text}
                </h2>
              );
            if (block.level === 3)
              return (
                <h3 key={idx} className="text-xl font-semibold mt-4 mb-2">
                  {block.text}
                </h3>
              );
            return null;
          case "paragraph":
            return (
              <p key={idx} className="mb-2 whitespace-pre-line">
                {block.text}
              </p>
            );
          case "image":
            return (
              <img
                key={idx}
                src={block.src}
                alt={block.alt}
                loading="lazy"
                className="rounded-lg shadow max-w-full h-auto my-4"
              />
            );
          case "list":
            return (
              <ul key={idx} className="list-disc ml-6 mb-2">
                {block.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case "code":
            return (
              <pre
                key={idx}
                className="bg-neutral-200 dark:bg-neutral-800 rounded-lg p-4 overflow-x-auto text-sm font-mono my-4"
              >
                <code>{block.code}</code>
              </pre>
            );
          case "table":
            return (
              <table
                key={idx}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden my-4"
              >
                <thead className="bg-gray-100 dark:bg-neutral-800">
                  <tr>
                    {block.headers.map((h: string, i: number) => (
                      <th key={i} className="p-2">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row: string[], i: number) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="p-2 border-t border-gray-200 dark:border-gray-700"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

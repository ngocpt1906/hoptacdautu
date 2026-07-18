import Link from "next/link";

type DataStateProps = {
  title: string;
  description: string;
  isConfigured: boolean;
};

export function DataState({
  title,
  description,
  isConfigured,
}: DataStateProps) {
  return (
    <div className="data-state">
      <span className="data-state-icon" aria-hidden="true">
        {isConfigured ? "!" : "↗"}
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
      {!isConfigured ? (
        <Link href="https://www.wpgraphql.com/docs/introduction" target="_blank">
          Xem hướng dẫn WPGraphQL
        </Link>
      ) : null}
    </div>
  );
}

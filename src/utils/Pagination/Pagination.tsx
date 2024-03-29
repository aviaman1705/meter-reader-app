import { useState, useEffect } from "react";
import "./Pagination.css";

export default function Pagination(props: paginationProps) {
  const [linkModels, setLinkModels] = useState<linkModel[]>([]);

  function selectPage(link: linkModel) {
    if (link.page === props.currentPage) {
      return;
    }

    if (!link.enabled) {
      return;
    }

    props.onChange(link.page);
  }

  function getClass(link: linkModel) {
    if (link.active) {
      return "active pointer";
    }

    if (link.enabled) {
      return "disabled";
    }

    return "pointer";
  }

  useEffect(() => {
    const previousPageEnabled = props.currentPage !== 1;
    const previousPage = props.currentPage - 1;
    const links: linkModel[] = [];

    links.push({
      text: "הקודם",
      enabled: previousPageEnabled,
      page: previousPage,
      active: false,
    });

    for (let i = 1; i <= props.totalAmontOfPages; i++) {
      if (
        i >= props.currentPage - props.radio &&
        i <= props.currentPage + props.radio
      ) {
        links.push({
          text: `${i}`,
          active: props.currentPage === i,
          enabled: true,
          page: i,
        });
      }
    }

    const nextPageEnabled =
      props.currentPage !== props.totalAmontOfPages &&
      props.totalAmontOfPages > 0;
    const nextPage = props.currentPage + 1;

    links.push({
      text: "הבא",
      enabled: nextPageEnabled,
      page: nextPage,
      active: false,
    });

    setLinkModels(links);
  }, [props.currentPage, props.totalAmontOfPages, props.radio]);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {linkModels.map((link) => (
          <li
            key={link.text}
            onClick={() => selectPage(link)}
            className={`page-item cursor ${getClass(link)}`}
          >
            <span className="page-link">{link.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface linkModel {
  page: number;
  enabled: boolean;
  text: string;
  active: boolean;
}

interface paginationProps {
  currentPage: number;
  totalAmontOfPages: number;
  radio: number;
  onChange(page: number): void;
}

Pagination.defaultProps = {
  radio: 3,
};

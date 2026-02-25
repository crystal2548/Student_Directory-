import { COURSES } from "../../constants/courses.js";

export default function Toolbar({
  search, onSearch,
  filterCourse, onFilterCourse,
  filterStatus, onFilterStatus,
  sort, onSort,
  viewMode, onViewMode,
}) {
  return (
    <div className="toolbar">
      <div className="toolbar__search">
        <svg className="search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="8.5" cy="8.5" r="5.5" />
          <path d="M15 15l-3-3" strokeLinecap="round" />
        </svg>
        <input
          className="input-field search-input"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <select
        className="input-field select-field"
        value={filterCourse}
        onChange={(e) => onFilterCourse(e.target.value)}
      >
        <option value="All">All Courses</option>
        {COURSES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select
        className="input-field select-field"
        value={filterStatus}
        onChange={(e) => onFilterStatus(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <select
        className="input-field select-field"
        value={sort}
        onChange={(e) => onSort(e.target.value)}
      >
        <option value="name-asc">Name A to Z</option>
        <option value="name-desc">Name Z to A</option>
        <option value="gpa-high">GPA High to Low</option>
        <option value="gpa-low">GPA Low to High</option>
      </select>

      <div className="view-toggle">
        <button
          className={`view-btn${viewMode === "grid" ? " view-btn--active" : ""}`}
          onClick={() => onViewMode("grid")}
          aria-label="Grid view"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" width="15" height="15">
            <rect x="1" y="1" width="6" height="6" rx="1" />
            <rect x="9" y="1" width="6" height="6" rx="1" />
            <rect x="1" y="9" width="6" height="6" rx="1" />
            <rect x="9" y="9" width="6" height="6" rx="1" />
          </svg>
        </button>
        <button
          className={`view-btn${viewMode === "list" ? " view-btn--active" : ""}`}
          onClick={() => onViewMode("list")}
          aria-label="List view"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" width="15" height="15">
            <rect x="1" y="2" width="14" height="2" rx="1" />
            <rect x="1" y="7" width="14" height="2" rx="1" />
            <rect x="1" y="12" width="14" height="2" rx="1" />
          </svg>
        </button>
      </div>
    </div>
  );
}

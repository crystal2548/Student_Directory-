import { courses } from "../data/courseData";
import "./Toolbar.css";

let Toolbar = ({
  search,
  onSearch,
  filterCourse,
  onFilterCourse,
  filterStatus,
  onFilterStatus,
  sort,
  onSort,
  viewMode,
  onViewMode,
}) => {

  let handleSearchChange = (ev) => {
    onSearch(ev.target.value);
  };

  let handleCourseChange = (ev) => {
    onFilterCourse(ev.target.value);
  };

  let handleStatusChange = (ev) => {
    onFilterStatus(ev.target.value);
  };

  let handleSortChange = (ev) => {
    onSort(ev.target.value);
  };

  return (
    <div className="toolbar">

      <div className="toolbar-search">
        <input
          className="toolbar-input search-input"
          placeholder="Search by name..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      {/* Filter by course */}
      <select
        className="toolbar-input toolbar-select"
        value={filterCourse}
        onChange={handleCourseChange}
      >
        <option value="All">All Courses</option>
        {courses.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* Filter by attendance */}
      <select
        className="toolbar-input toolbar-select"
        value={filterStatus}
        onChange={handleStatusChange}
      >
        <option value="All">All Status</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      {/* Sort */}
      <select
        className="toolbar-input toolbar-select"
        value={sort}
        onChange={handleSortChange}
      >
        <option value="name-asc">Name A to Z</option>
        <option value="name-desc">Name Z to A</option>
      </select>

      <div className="view-toggle">
        <button
          className={`view-btn ${viewMode === "grid" ? "view-btn-active" : ""}`}
          onClick={() => onViewMode("grid")}
        >
          Grid
        </button>
        <button
          className={`view-btn ${viewMode === "list" ? "view-btn-active" : ""}`}
          onClick={() => onViewMode("list")}
        >
          List
        </button>
      </div>

    </div>
  );
};

export default Toolbar;

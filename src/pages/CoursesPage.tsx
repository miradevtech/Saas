import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, BookOpen, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { COURSES, CATEGORIES } from '../data/courses';
import { Course } from '../types';
import { CourseCard } from '../components/CourseCard';
import { CourseThumbnail } from '../components/CourseThumbnail';

interface CoursesPageProps {
  initialCategory?: string;
  onSelectCourse: (courseId: string) => void;
  onBack?: () => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  initialCategory = 'All',
  onSelectCourse,
  onBack,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  // Featured Course Highlight at Top
  const spotlightCourse = COURSES[0]; // "How to Start a Small Business"

  // Filtered Courses logic
  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === 'All' || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchQuery, selectedCategory, selectedLevel]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || selectedLevel !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLevel('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back button */}
      {onBack && (
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-teal-400" />
          <span>Back to Home</span>
        </button>
      )}

      {/* Page Title & Search Header */}
      <div>
        <div className="text-xs font-mono text-teal-400 tracking-wider uppercase mb-1">
          Complete Curriculum
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              All Courses ({COURSES.length})
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Explore all 10 structured, practical courses designed for immediate real-world mastery.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, topic, or keyword..."
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-purple-500 rounded-xl pl-10 pr-9 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Featured Spotlight Course (When no active search is running) */}
      {!hasActiveFilters && (
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-900/90 to-zinc-950 p-5 sm:p-7 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 h-56 sm:h-64 rounded-xl overflow-hidden border border-zinc-800">
              <CourseThumbnail courseId={spotlightCourse.id} className="w-full h-full" />
            </div>
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span>FEATURED COURSE SPOTLIGHT</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {spotlightCourse.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {spotlightCourse.shortDescription}
              </p>
              <div className="flex items-center gap-3 text-xs text-zinc-400 pt-1">
                <span>{spotlightCourse.category}</span>
                <span>·</span>
                <span>{spotlightCourse.level}</span>
                <span>·</span>
                <span>{spotlightCourse.lessonsCount} lessons</span>
                <span>·</span>
                <span>{spotlightCourse.duration}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onSelectCourse(spotlightCourse.id)}
                  className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs transition-all flex items-center gap-2 shadow-md shadow-teal-500/20"
                >
                  <span>Explore Course Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category & Level Filters (Interactive segmented controls as permitted by design constitution) */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-400 text-zinc-950 font-bold shadow-sm'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Level filter dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500">Difficulty:</span>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-300 outline-none focus:border-purple-500"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-zinc-400 hover:text-indigo-400 ml-2 transition-colors"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs text-zinc-500 flex items-center gap-2">
          <span>Showing {filteredCourses.length} of {COURSES.length} courses</span>
          {selectedCategory !== 'All' && <span>in <strong className="text-zinc-300">{selectedCategory}</strong></span>}
          {searchQuery && <span>matching <strong className="text-zinc-300">"{searchQuery}"</strong></span>}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={onSelectCourse}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/50 space-y-4">
          <BookOpen className="w-8 h-8 text-zinc-600 mx-auto" />
          <h3 className="text-base font-semibold text-white">No matching courses found</h3>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto">
            We couldn't find any courses matching your search or active filter combination.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-teal-400 hover:text-teal-300"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

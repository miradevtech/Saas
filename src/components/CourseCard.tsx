import React from 'react';
import { ArrowRight, CheckCircle2, Clock, BookOpen } from 'lucide-react';
import { Course } from '../types';
import { CourseThumbnail } from './CourseThumbnail';
import { useLearning } from '../context/LearningContext';

interface CourseCardProps {
  course: Course;
  onSelect: (courseId: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  const { isEnrolled, getEnrollment } = useLearning();
  const enrolled = isEnrolled(course.id);
  const enrollment = getEnrollment(course.id);

  return (
    <div
      onClick={() => onSelect(course.id)}
      className="group relative flex flex-col bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-purple-500/40 rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-purple-950/30"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950">
        <CourseThumbnail courseId={course.id} className="w-full h-full group-hover:scale-[1.02] transition-transform duration-300" />
        
        {/* Subtle enrolled status banner if active */}
        {enrolled && (
          <div className="absolute top-3 right-3 bg-zinc-950/90 backdrop-blur-md border border-teal-400/40 px-2.5 py-1 rounded-md text-[11px] font-mono text-teal-400 flex items-center gap-1.5 shadow-md">
            {enrollment?.isCompleted ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Completed</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span>{enrollment?.progressPercent || 0}% Done</span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          {/* Clean Unboxed Metadata with Typographic Separators */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium mb-2.5 flex-wrap">
            <span className="text-teal-400 font-semibold">{course.category}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{course.level}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3 h-3 text-zinc-500" />
              {course.lessonsCount} lessons
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-zinc-500" />
              {course.duration}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-teal-300 transition-colors line-clamp-1 mb-2">
            {course.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
            {course.shortDescription}
          </p>
        </div>

        {/* Dynamic Progress or CTA Area */}
        <div className="pt-3 border-t border-zinc-800/80">
          {enrolled && enrollment && !enrollment.isCompleted ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Progress</span>
                <span className="font-mono text-teal-400 font-medium">{enrollment.progressPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-teal-400 rounded-full transition-all duration-300"
                  style={{ width: `${enrollment.progressPercent}%` }}
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-zinc-400 truncate max-w-[170px]">
                  Lesson {enrollment.completedLessonIds.length + 1} of {course.lessonsCount}
                </span>
                <span className="text-xs text-teal-400 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Continue <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-zinc-400">Complete curriculum</span>
              <span className="text-zinc-200 group-hover:text-teal-400 flex items-center gap-1 transition-colors">
                {enrolled && enrollment?.isCompleted ? 'Review Course' : 'View Course'}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

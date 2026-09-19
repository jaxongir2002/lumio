import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';
import {
  BookOpen,
  Clock,
  ArrowUpRight,
  Search,
  X,
  CheckCircle2,
  Share2,
  Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ScrollReveal } from './ScrollAnimations';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState(false);
  const { t, language } = useApp();

  const categories = [
    { id: 'all', label: t.blog.allCategory },
    { id: 'Design Systems', label: language === 'ru' ? 'Дизайн-системы' : 'Design Systems' },
    { id: 'Frontend Architecture', label: language === 'ru' ? 'Фронтенд-архитектура' : 'Frontend Architecture' },
    { id: 'Motion & UI', label: language === 'ru' ? 'Анимация и UI' : 'Motion & UI' },
    { id: 'Collaboration', label: language === 'ru' ? 'Коллаборация' : 'Collaboration' }
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat =
      selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="insights" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                {t.blog.badge}
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
                {t.blog.title}
              </h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-md">
              {t.blog.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Search & Category Filter Bar */}
        <ScrollReveal direction="up" distance={20} delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-neutral-800/80 mb-10">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.blog.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedPost(post)}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800/80 hover:border-neutral-500 transition-all flex flex-col justify-between cursor-pointer group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 text-xs font-mono">
                  <span className="text-neutral-500">{post.date}</span>
                  <span className="px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700 text-neutral-300">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white group-hover:text-neutral-200 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 rounded-full object-cover border border-neutral-700"
                  />
                  <span className="text-neutral-300 font-medium font-sans">
                    {post.author.name}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-neutral-500 font-mono text-[11px]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="text-neutral-300 group-hover:text-white flex items-center gap-0.5">
                    {t.blog.readEssay} <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              className="bg-neutral-900 border border-neutral-800 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto text-neutral-200"
            >
              {/* Reader Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/90 sticky top-0 z-10 backdrop-blur">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>LUMIO ESSAYS • {selectedPost.category.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors cursor-pointer"
                    title="Copy Link"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Reader Body */}
              <div className="overflow-y-auto p-6 sm:p-10 space-y-6 flex-1">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-3">
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>

                  <h1 className="text-2xl sm:text-4xl font-display font-medium text-white leading-tight">
                    {selectedPost.title}
                  </h1>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-neutral-800/80">
                    <img
                      src={selectedPost.author.avatar}
                      alt={selectedPost.author.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-neutral-700"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white font-sans">
                        {selectedPost.author.name}
                      </h4>
                      <p className="text-xs text-neutral-400">
                        {selectedPost.author.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Takeaways Box */}
                <div className="p-5 rounded-xl bg-neutral-800/60 border border-neutral-700 space-y-3">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                    {t.blog.keyPrinciples}:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                    {selectedPost.keyTakeaways.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Article Content */}
                <div className="space-y-4 text-neutral-300 leading-relaxed text-sm sm:text-base font-sans font-light">
                  {selectedPost.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Tags */}
                <div className="pt-6 border-t border-neutral-800 flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};


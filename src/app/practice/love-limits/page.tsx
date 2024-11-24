'use client'

import React from 'react';
import { motion } from 'framer-motion';

export default function LoveLimitsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-normal text-gray-900 mb-4">
            Love & Limits
          </h1>
          <p className="text-xl text-gray-600">
          The Foundation For Healthy Discipline
          </p>
        </motion.div>

        {/* Introduction - Single Column */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In the fabric of relationship, we find two fundamental forces that together shape the possibility for growth and the maximization of conscious potential. These forces—love and limits—represent the essential dynamics of both cosmic and personal reality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Like the interplay of expansion and contraction in the universe, these forces work together to create the container for healthy experience and development. Neither force alone is sufficient; it is in their dynamic balance that the right conditions are created for life to thrive.
          </p>
        </div>

        {/* Fundamental Nature - Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-normal text-gray-900 mb-4">The Nature of Limits</h2>
            <p className="text-gray-600 mb-4">
              Limits represent the principle of form and definition. Like the banks of a river that channel water's flow, limits provide the structure through which energy can move purposefully.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Structure and Form
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Differentiation
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Protection
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Independence
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-gray-50 p-8 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-normal text-gray-900 mb-4">The Nature of Love</h2>
            <p className="text-gray-600 mb-4">
              Love manifests as the principle of openness and unity. Like space that contains all forms without being limited by them, love represents our capacity to embrace experience without bounds.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Limitlessness
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Unity
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Nurturing
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Interdependence
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Integration - Single Column */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-normal text-gray-900 mb-6">The Dance of Integration</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            These forces do not oppose but complement each other. Like inhale and exhale in breathing, each makes the other possible. Limits without love become rigid and restrictive; love without limits becomes overwhelming and formless.
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 italic">
              "Like a garden that needs both space to grow and boundaries to thrive, our inner world requires both the nurturing space of unconditional acceptance and the supportive structure of clear boundaries."
            </p>
          </div>
        </div>

        {/* Practical Manifestations - Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-normal text-gray-900 mb-4">Boundaries in Practice</h3>
            <ul className="space-y-4">
              <li className="text-gray-700">
                <strong className="block text-gray-900">Personal Space</strong>
                Recognition and protection of individual needs
              </li>
              <li className="text-gray-700">
                <strong className="block text-gray-900">Clear Communication</strong>
                Expression of personal limits and requirements
              </li>
              <li className="text-gray-700">
                <strong className="block text-gray-900">Healthy Structure</strong>
                Creating containers for growth and development
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-gray-50 p-8 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-normal text-gray-900 mb-4">Empathy in Practice</h3>
            <ul className="space-y-4">
              <li className="text-gray-700">
                <strong className="block text-gray-900">Empathic Understanding</strong>
                Sensing and responding to others' experiences
              </li>
              <li className="text-gray-700">
                <strong className="block text-gray-900">Open Presence</strong>
                Being available for authentic connection
              </li>
              <li className="text-gray-700">
                <strong className="block text-gray-900">Supportive Space</strong>
                Creating environment for sharing and growth
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Conclusion - Single Column */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-normal text-gray-900 mb-6">Moving Forward</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Understanding these complementary forces provides the foundation for conscious development. By learning to work with both love and limits, we create the conditions for genuine growth and authentic relationship—first with ourselves, and naturally extending to all our connections.
          </p>
          <motion.div 
            className="bg-blue-50 p-8 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-normal text-gray-900 mb-3">Ready to Practice?</h3>
            <p className="text-gray-700">
              Explore our core practices to begin working consciously with these forces in your daily life.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
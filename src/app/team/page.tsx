'use client';

import { Card, CardContent } from '@/components/ui/card';
import { teamMembers } from '@/data/team';
import { User } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

export default function TeamPage() {
  const categoryTitles: Record<string, string> = {
    executive: 'Executives',
    management: 'Management Personnel',
    administration: 'Administration',
    field: 'Field Leaders',
  };

  const categories = ['executive', 'management', 'administration', 'field'] as const;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
              <p className="text-xl text-gray-300">
                Meet the experienced professionals who make DFW Glazing a leader in commercial glass installation
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Members by Category */}
      {categories.map((category, categoryIndex) => {
        const members = teamMembers.filter((member) => member.category === category);

        if (members.length === 0) return null;

        // Alternate backgrounds: Executive (white), Management (black), Administration (white), Field (black)
        const isBlackSection = categoryIndex % 2 === 1;
        const sectionBg = isBlackSection ? 'bg-black text-white' : 'bg-white';
        const cardBorder = isBlackSection ? 'border-2 border-white hover:border-[#0e8c21]' : 'border-2 border-gray-200 hover:border-[#0e8c21]';
        const cardBg = isBlackSection ? 'bg-white' : '';
        const textColor = isBlackSection ? 'text-gray-900' : 'text-gray-900';

        return (
          <section key={category} className={`py-20 ${sectionBg}`}>
            <div className="container mx-auto px-4">
              <FadeIn direction="up">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isBlackSection ? 'border-b border-white pb-4' : 'border-b border-gray-300 pb-4'}`}>
                  {categoryTitles[category]}
                </h2>
              </FadeIn>

              <div className="space-y-12">
                {members.map((member, index) => (
                  <FadeIn key={member.id} delay={index * 0.1} direction="up">
                    <Card className={`max-w-5xl mx-auto ${cardBorder} ${cardBg} hover:shadow-2xl transition-all duration-300`}>
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-[300px_1fr] gap-0">
                          {/* Image Placeholder */}
                          <div className="bg-gray-200 h-64 md:h-auto flex items-center justify-center">
                            <User className="w-24 h-24 text-gray-400" />
                          </div>

                          {/* Member Info */}
                          <div className="p-6">
                            <h3 className={`text-2xl font-bold mb-1 ${textColor}`}>{member.name}</h3>
                            <p className="text-lg text-[#0e8c21] font-medium mb-6">{member.title}</p>

                            {member.career && (
                              <div className="mb-4">
                                <h4 className={`font-semibold mb-2 ${textColor}`}>Career</h4>
                                <p className="text-gray-700">{member.career}</p>
                              </div>
                            )}

                            {member.favoriteMemory && (
                              <div className="mb-4">
                                <h4 className={`font-semibold mb-2 ${textColor}`}>Favorite Glass Memories</h4>
                                <p className="text-gray-700">{member.favoriteMemory}</p>
                              </div>
                            )}

                            {member.personal && (
                              <div>
                                <h4 className={`font-semibold mb-2 ${textColor}`}>Personal & Hobbies</h4>
                                <p className="text-gray-700">{member.personal}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-[#0e8c21] text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Interested in being part of the DFW Glazing family? We're always looking for talented professionals.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

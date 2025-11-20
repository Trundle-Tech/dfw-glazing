import { Card, CardContent } from '@/components/ui/card';
import { teamMembers } from '@/data/team';
import { User } from 'lucide-react';

export const metadata = {
  title: 'Our Team | DFW Glazing Inc.',
  description: 'Meet the experienced team behind DFW Glazing - executives, project managers, and field leaders with over 81 years of combined experience.',
};

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
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-gray-300">
              Meet the experienced professionals who make DFW Glazing a leader in commercial glass installation
            </p>
          </div>
        </div>
      </section>

      {/* Team Members by Category */}
      {categories.map((category) => {
        const members = teamMembers.filter((member) => member.category === category);

        if (members.length === 0) return null;

        return (
          <section key={category} className="py-20 odd:bg-white even:bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center border-b pb-4">
                {categoryTitles[category]}
              </h2>

              <div className="space-y-12">
                {members.map((member) => (
                  <Card key={member.id} className="max-w-5xl mx-auto">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-[300px_1fr] gap-0">
                        {/* Image Placeholder */}
                        <div className="bg-gray-200 h-64 md:h-auto flex items-center justify-center">
                          <User className="w-24 h-24 text-gray-400" />
                        </div>

                        {/* Member Info */}
                        <div className="p-8">
                          <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                          <p className="text-lg text-[#339900] font-medium mb-6">{member.title}</p>

                          {member.career && (
                            <div className="mb-4">
                              <h4 className="font-semibold text-gray-900 mb-2">Career</h4>
                              <p className="text-gray-700">{member.career}</p>
                            </div>
                          )}

                          {member.favoriteMemory && (
                            <div className="mb-4">
                              <h4 className="font-semibold text-gray-900 mb-2">Favorite Glass Memories</h4>
                              <p className="text-gray-700">{member.favoriteMemory}</p>
                            </div>
                          )}

                          {member.personal && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Personal & Hobbies</h4>
                              <p className="text-gray-700">{member.personal}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-[#339900] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Interested in being part of the DFW Glazing family? We're always looking for talented professionals.
          </p>
        </div>
      </section>
    </div>
  );
}

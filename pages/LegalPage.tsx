
import React from 'react';
import PageHeader from '../components/PageHeader';
import UrbanCard from '../components/UrbanCard';
import { AllSeeingEye, Merkaba } from '../components/EsotericIcons';

const LegalPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-24">
      <PageHeader title="LEGAL // FRAMEWORK" subtitle="Terms of Engagement & Privacy Protocol." />

      <div className="space-y-12">
        <UrbanCard className="!bg-zinc-950 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10">
                <Merkaba className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-2xl font-heading mb-6 text-white relative z-10">01. DISCLAIMER OF LIABILITY</h2>
            <div className="text-zinc-400 text-sm leading-relaxed space-y-4 font-body relative z-10">
                <p>
                    <strong>PRIVATO (Urban Minds) is NOT a law firm.</strong> We do not provide legal advice, legal representation, or legal strategy for litigation.
                </p>
                <p>
                    Our services are strictly limited to educational guidance, document preparation based on user inputs, and administrative support for establishing private associations and trusts.
                </p>
                <p>
                    All users are advised to consult with a licensed attorney in their specific jurisdiction regarding complex legal matters, tax planning, or criminal defense. Use of our materials is at your own risk and discretion.
                </p>
            </div>
        </UrbanCard>

        <UrbanCard className="!bg-zinc-950 relative overflow-hidden border border-[var(--color-lux-gold)]/20">
             <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-5 pointer-events-none">
                <AllSeeingEye className="w-64 h-64 text-[var(--color-lux-gold)]" />
            </div>
            
            <h2 className="text-2xl font-heading mb-6 text-[var(--color-lux-gold)] flex items-center gap-4 relative z-10">
                02. PRIVACY PROTOCOL
                <AllSeeingEye className="w-6 h-6" />
            </h2>
            <div className="text-zinc-400 text-sm leading-relaxed space-y-4 font-body relative z-10">
                <p>
                    We practice data minimization. We only collect the information absolutely necessary to render services.
                </p>
                <p>
                    <strong>Client Data:</strong> Information submitted via our Intake Protocols is encrypted and stored on secure, private servers. We do not sell, rent, or trade client data to third parties.
                </p>
                <p>
                    <strong>Associations:</strong> We do not maintain a central registry of Private Membership Associations created through our system. Once your documents are delivered, the governance of that data is solely in your hands.
                </p>
            </div>
        </UrbanCard>

        <UrbanCard className="!bg-zinc-950">
            <h2 className="text-2xl font-heading mb-6 text-white">03. TERMS OF SERVICE</h2>
            <div className="text-zinc-400 text-sm leading-relaxed space-y-4 font-body">
                <p>
                    By engaging our services, you agree that you are doing so for lawful purposes. You agree not to use our structures for tax evasion, money laundering, or any criminal activity.
                </p>
                <p>
                    We reserve the right to refuse service to any individual or group whose intent is deemed malicious, unlawful, or misaligned with our principles of responsible sovereignty.
                </p>
            </div>
        </UrbanCard>
      </div>
    </div>
  );
};

export default LegalPage;
